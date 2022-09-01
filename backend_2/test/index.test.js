const request = require("supertest");
const App = require("../index");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(App).get("/");
    expect(response.body.state).toBe(true);
    expect(response.body.message).toBe("Welcome to Backend_2");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
});
