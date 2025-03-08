import { PrismaClient, Prisma } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  const values = await req.json();
  const prisma = new PrismaClient().$extends(withAccelerate());

  try {
    const user = await prisma.waitlistUser.create({
      data: {
        email: values.email,
        name: values.name,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "An unexpected error occurred." + error },
      { status: 500 },
    );
  }
}
