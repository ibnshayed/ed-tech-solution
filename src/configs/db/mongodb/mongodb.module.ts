import { Global, Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as paginate from 'mongoose-paginate-v2';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@mongo:27017/testdb?authSource=admin',
      {
        connectionFactory: (connection) => {
          const logger = new Logger();
          logger.log('==================> Database connected successfully');
          connection.plugin(paginate);
          return connection;
        },
      },
    ),
  ],
})
export class MongoDBModule {}
