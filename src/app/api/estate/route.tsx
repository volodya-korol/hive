import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const items = [
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/19739988/pexels-photo-19739988/free-photo-of-driveway-in-front-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6283961/pexels-photo-6283961.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/5825363/pexels-photo-5825363.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6587901/pexels-photo-6587901.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6076854/pexels-photo-6076854.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/6908502/pexels-photo-6908502.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
//   {
//     title: "Назва",
//     dimensions: "35м x 70м",
//     price: 1000,
//     src: "https://images.pexels.com/photos/4846221/pexels-photo-4846221.jpeg?auto=compress&cs=tinysrgb&w=600",
//     type: "sell",
//     category: "building",
//     goal: "living",
//     author: "realtor",
//     size: "medium",
//     city: "Kyiv",
//     description: "Some description some description some description ",
//   },
// ];

export async function GET(request: any) {
  const email = request.nextUrl.searchParams.get("email");
  if (email) {
    const estates = await prisma.estate.findMany({
      where: { userEmail: email },
    });
    console.log(estates);
    return new NextResponse(JSON.stringify(estates), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  let types = request.nextUrl.searchParams.getAll("types");
  let maxPrice = parseInt(
    request.nextUrl.searchParams.get("maxPrice") || "200000"
  );
  let categories = request.nextUrl.searchParams.getAll("categories");
  let goal = request.nextUrl.searchParams.getAll("goal");
  let authors = request.nextUrl.searchParams.getAll("authors");
  let sizes = request.nextUrl.searchParams.getAll("sizes");
  let page = parseInt(request.nextUrl.searchParams.get("page") || "1");

  types = types.length > 0 ? types.join().split(" ") : types;
  categories =
    categories.length > 0 ? categories.join().split(" ") : categories;
  goal = goal.length > 0 ? goal.join().split(" ") : goal;
  authors = authors.length > 0 ? authors.join().split(" ") : authors;
  sizes = sizes.length > 0 ? sizes.join().split(" ") : sizes;

  console.log(types, maxPrice, categories, goal, authors, sizes, page);

  const perPage = 20;

  const where = {
    AND: [
      types.length > 0 ? { type: { in: types } } : {},
      categories.length > 0 ? { category: { in: categories } } : {},
      goal.length > 0 ? { goal: { in: goal } } : {},
      authors.length > 0 ? { author: { in: authors } } : {},
      sizes.length > 0 ? { size: { in: sizes } } : {},
      { price: { lte: maxPrice } },
    ],
  };

  const offset = (page - 1) * perPage;

  const estates = await prisma.estate.findMany({
    where,
    take: perPage,
    skip: offset,
  });

  // console.log(estates);
  return new NextResponse(JSON.stringify(estates), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: any) {
  return new NextResponse();
}

export async function PUT(request: any) {
  return new NextResponse();
}

export async function DELETE(request: any) {
  return new NextResponse();
}
