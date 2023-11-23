import { faker } from '@faker-js/faker';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MongoDBService } from './../src/configs/db/mongodb/mongodb.service';

describe('enrollment', () => {
  let app: INestApplication;
  let createEnrollmentPayload;
  let dbConnection: Connection;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      providers: [MongoDBService],
    }).compile();
    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');

    dbConnection = moduleRef.get<MongoDBService>(MongoDBService).getDbHandle();

    const course = await dbConnection.collection('courses').findOne();

    createEnrollmentPayload = {
      studentName: faker.person.firstName(),
      courseId: course._id,
    };
    await app.init();
  });

  afterAll(async () => {
    await dbConnection?.close();
    await app?.close();
  });

  it(`/POST enrollment`, () => {
    jest.setTimeout(60000);

    return request(app.getHttpServer())
      .post('/api/enrollment/create')
      .send(createEnrollmentPayload)
      .expect(201);
    // .expect((res) => {
    //   const resData = res.body;
    //   expect(resData.studentName).toBeDefined();
    // });
  });
});
