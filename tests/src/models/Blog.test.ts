import mongoose from 'mongoose';
import endpoint from '../../../src/config/endpoint.config';

describe('insert', () => {
  beforeAll(async() => {
    await mongoose.connect(endpoint.testMongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('Should save a blog into collection', async () => {
    const blogs = mongoose.connection.collection("blogs");
    const mockUser = {_id: 'some-user-id', title: 'John', description: 'hello there'};
    await blogs.insertOne(mockUser);

    const insertedUser = await blogs.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});