## First of all clone the git repo and then follow the bellow instructions to run the application.

## Installation

```bash
$ npm install or yarn install
```

## Running the app locally

```bash
# development
$ npm run dev or yarn run dev
```

## Running the app with docker compose

```bash
# windows
$ docker-compose up -d
# linux
$ docker compose up -d
```

## Test

```bash
# e2e tests locally (you need to have mongodb locally)
$ yarn test:e2e
# e2e tests with docker
$ docker exec <container_name> npm run test:e2e
(example)
$ docker exec ed-tech-solution-node-app-1 npm run test:e2e
```

## Api Documentation

## Open Api (Swagger)

- http://localhost:3000/api

### Course

1. Get All Course with pagination - /GET http://localhost:3000/api/v1/course/all-courses

```javascript
// all query ar optional
query = {
  page: 1,
  limit: 10,
  instructor: 'Emran',
  duration: 30,
  price: 10,
};
```

2. Get Course by id - /GET http://localhost:3000/api/v1/course/:id
3. Create a course - /POST http://localhost:3000/api/v1/course/create

```javascript
// request body takes
body = {
  title: 'typescript',
  description: 'Javascript Crus Course',
  instructor: 'Emran Ibn Shayed',
  duration: '60',
  price: '100',
};
```

### Enrollment

1. create an enrollment if course is valid - http://localhost:3000/api/v1/enrollment/create

```javascript
// request body takes
body = {
  studentName: 'Jalal',
  courseId: '655e4273ab324a9e70ea9342',
};
```
