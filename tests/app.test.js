const request = require("supertest");
const createApp = require("../src/app");

const app = createApp();

test("главная страница возвращает KT3 App", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(200);
  expect(response.text).toBe("KT3 App");
});

test("health возвращает статус ok", async () => {
  const response = await request(app).get("/health");

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ status: "ok" });
});