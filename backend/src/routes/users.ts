import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "@itachiuchiha/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// SIGNUP ROUTE
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  //VALIDATE INPUT
  const { success } = signUpInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  //SANATIZE INPUT
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });
  } catch (error) {
    c.status(500);
    return c.json({
      error: "User Already Exists",
    });
  }
});

// SIGNIN ROUTE
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input",
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({
      error: "User Not Found",
    });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
});
