## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app locally

```bash
# development
$ yarn run dev
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

# e2e tests
$ yarn run test:e2e
```

## Api Documentation
## Open Api (Swagger)
- 

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


