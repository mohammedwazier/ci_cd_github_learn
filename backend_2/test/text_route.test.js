// const request = require("supertest");
const route = require("../text_route");

describe("Text API Endpoint", () => {
  test("Failed on Number", () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = { status: jest.fn(() => res), send: jest.fn(() => res) };
    route.text(req, res);
    expect(res.status.mock.calls[0][0]).toBe(500);
    expect(res.send.mock.calls[0][0].state).toBe(false);
  });

  test("Success on Text", () => {
    const req = {
      params: {
        id: "testing",
      },
    };
    const res = { status: jest.fn(() => res), send: jest.fn(() => res) };
    route.text(req, res);
    expect(res.status.mock.calls[0][0]).toBe(200);
    expect(res.send.mock.calls[0][0].state).toBe(true);
  });
});
