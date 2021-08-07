const mongoose = require("mongoose");
const Author = require("../models/authors.model");
const Book = require("../models/books.model");
const app = require("../app");
const request = require("supertest");
const { Books } = require("./utils/samples");

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

describe("Books tests", () => {
  test("Create Books should return 200", async () => {
    const response = await request(app.callback())
      .post("/books")
      .send(Books.sample);
    expect(response.status).toBe(200);
  });

  test("Delete Book should return 200", async () => {
    const book = await Book.create(Books.sample);
    const response = await request(app.callback()).delete(`/books/${book._id}`);
    expect(response.status).toBe(200);
  });

  test("Update Book should return 200", async () => {
    const book = await Book.create(Books.sample);
    const response = await request(app.callback())
      .put(`/books/${book._id}`)
      .send({ name: "Livro Atualizado" });
    expect(response.status).toBe(200);
  });

  test("Get Book should return 200", async () => {
    const book = await Book.create(Books.sample);
    const response = await request(app.callback()).get(`/books/${book._id}`);
    expect(response.status).toBe(200);
  });

  test("GetAll Books should return 200", async () => {
    await Book.create(Books.sample);
    const response = await request(app.callback()).get("/books");
    expect(response.status).toBe(200);
  });
});
