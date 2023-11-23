import { faker } from '@faker-js/faker';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { MongoDBModule } from './../src/configs/db/mongodb/mongodb.module';
import { EnrollmentModule } from './../src/modules/enrollment/enrollment.module';

describe('enrollment', () => {
  let app: INestApplication;
  let createEnrollmentPayload;

  beforeAll(async () => {
    // jest.setTimeout(600000);
    const moduleRef = await Test.createTestingModule({
      imports: [MongoDBModule, EnrollmentModule],
      // providers: [EnrollmentService],
    }).compile();
    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();

    createEnrollmentPayload = {
      studentName: faker.person.firstName(),
      course: faker.string.uuid(),
    };
  });

  it(`/POST enrollment`, () => {
    jest.setTimeout(60000);

    return request(app.getHttpServer())
      .post('/api/enrollment/create')
      .send(createEnrollmentPayload)
      .expect(201)
      .expect((res) => {
        const resData = res.body;
        expect(resData.studentName).toBeDefined();
      });
  });

  afterAll(async () => {
    await app?.close();
  });
});
