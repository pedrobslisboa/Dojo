import request from "supertest";

describe("server tests sample", () => {
  let server;
  beforeAll(async () => {
    const mod = await import("../index");
    server = mod.default;
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    }
  });

  it("ping", async () => {
    const res = await request(server).get("/ping");

    expect(res.status).toBe(200)
    expect(res.text).toBe("pong")
  });
});
