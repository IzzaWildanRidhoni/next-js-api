import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
  const posts = await prisma.post.findMany();

  return NextResponse.json(
    {
      success: true,
      message: "List data Posts",
      data: posts,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  // get all request
  const { title, content } = await request.json();

  // create data
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Data Post berhasil dibuat",
      data: post,
    },
    {
      status: 201,
    }
  );
}
