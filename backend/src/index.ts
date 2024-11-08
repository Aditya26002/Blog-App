import { Hono } from "hono";
import { userRouter } from "./routes/users";
import { blogRouter } from "./routes/blog";

const app = new Hono();

app.route("/api/v1/users", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
