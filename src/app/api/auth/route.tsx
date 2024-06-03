import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: any) {
  return new NextResponse();
}

export async function POST(request: any) {
  const data = await request.json();

  const similarUser = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (!similarUser) {
    let { lastName, firstName, ...user } = data;
    user = { ...user, name: `${data.firstName} ${data.lastName}` };
    console.log(user);
    await prisma.user.create({ data: user });
    return new NextResponse(data.email + " created", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new NextResponse(data.email + " was not created", {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
  return new NextResponse();
}

export async function PUT(request: any) {
  return new NextResponse();
}

export async function DELETE(request: any) {
  return new NextResponse();
}
