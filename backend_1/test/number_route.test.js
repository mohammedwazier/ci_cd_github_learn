// const request = require("supertest");
const route = require("../number_route");

describe("Number API Endpoint", () => {
  test("Success on Number", () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = { status: jest.fn(() => res), send: jest.fn(() => res) };
    route.number(req, res);
    expect(res.status.mock.calls[0][0]).toBe(200);
    expect(res.send.mock.calls[0][0].state).toBe(true);
  });

  test("Failed on Text", () => {
    const req = {
      params: {
        id: "testing",
      },
    };
    const res = { status: jest.fn(() => res), send: jest.fn(() => res) };
    route.number(req, res);
    expect(res.status.mock.calls[0][0]).toBe(500);
    expect(res.send.mock.calls[0][0].state).toBe(false);
  });
});
