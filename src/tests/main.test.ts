import { expect, it, describe, beforeAll, afterAll } from "@jest/globals";
import supertest from "supertest";
import app from "../config/app";

const request = supertest(app);

describe("GET /", () => {
  //Opens the server before all the tests
  let server: any;
  beforeAll(async () => {
    server = await app.listen(3000);
  });
  //Closes the server and the pool after all the tests
  afterAll(async () => {
    await server.close();
  });
  //The tests
  it("Should return status code of 200", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Hello World");
  });
  it("Should return status code of 418(I'm a teapot) and throw a custom error", async () => {
    const response = await request.get("/error");
    expect(response.statusCode).toBe(418);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("This is an error");
  });
});
