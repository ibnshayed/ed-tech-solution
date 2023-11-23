import { Module } from '@nestjs/common';
import { MongoDBModule } from './configs';
import { ApiModule } from './modules/api.module';

@Module({
  imports: [MongoDBModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
