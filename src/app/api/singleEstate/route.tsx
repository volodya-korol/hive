import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  const estates = await prisma.estate.findUnique({ where: { id } });
  return new NextResponse(JSON.stringify(estates), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: any) {
  const item = await request.json();
  const estates = await prisma.estate.create({ data: item });
  return new NextResponse(JSON.stringify(estates), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
