const mongoose = require("mongoose");
const Author = require("../models/authors.model");
const app = require("../app");
const request = require("supertest");
const { Authors } = require("./utils/samples");

beforeAll(async () => {
  await mongoose.connect(`mongodb://${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Authors tests", () => {
  test("GetAll Authors should return 200", async () => {
    await Author.create(Authors.sample);
    const response = await request(app.callback()).get("/authors");
    expect(response.status).toBe(200);
  });
});
