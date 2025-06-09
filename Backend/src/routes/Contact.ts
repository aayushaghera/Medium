import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const contactRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

contactRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { firstName, lastName, email, subject, message } = body;

  // Initialize Prisma
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Create the inquiry
    const inquiry = await prisma.inquiry.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    return c.json({
      message: "Inquiry submitted successfully",
      inquiryId: inquiry.id,
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    c.status(500);
    return c.json({ message: "Failed to submit inquiry" });
  }
});
