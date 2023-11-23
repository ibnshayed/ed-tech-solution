import { faker } from '@faker-js/faker';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CourseModule } from '../src/modules/courses/course.module';
import { MongoDBModule } from './../src/configs/db/mongodb/mongodb.module';

describe('course', () => {
  let app: INestApplication;
  let createCoursePayload;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MongoDBModule, CourseModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();

    createCoursePayload = {
      title: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      instructor: faker.person.firstName(),
      duration: faker.number.int(),
      price: faker.number.int(),
    };
  });

  afterAll(async () => {
    await app?.close();
  });

  it(`/GET course create`, () => {
    jest.setTimeout(60000);

    return request(app.getHttpServer())
      .post('/api/course/create')
      .send(createCoursePayload)
      .expect(201);
    // .expect((res) => {
    //   const resData = res.body;
    //   expect(resData.title).toBeDefined();
    // });
  });
});
