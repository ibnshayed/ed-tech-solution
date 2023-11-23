import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, connect } from 'mongoose';

export class MongoDBMemoryServer {
  private static instance: MongoDBMemoryServer;
  private mongod: MongoMemoryServer;
  private mongoConnection: Connection;

  private constructor() {
    // Private constructor to prevent direct instantiation
    // this.createAsync();
  }

  // private createAsync = async () => {

  // };

  public static getInstance(): MongoDBMemoryServer {
    if (!MongoDBMemoryServer.instance) {
      MongoDBMemoryServer.instance = new MongoDBMemoryServer();
    }
    return MongoDBMemoryServer.instance;
  }

  public connect = async () => {
    this.mongod = await MongoMemoryServer.create();
    const uri = this.mongod.getUri();
    this.mongoConnection = (await connect(uri)).connection;
    return this.mongoConnection;
  };

  public close = async () => {
    await this.mongoConnection.dropDatabase();
    await this.mongoConnection.close();
    await this.mongod.stop();
  };

  public clear = async () => {
    const collections = this.mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  };
}
