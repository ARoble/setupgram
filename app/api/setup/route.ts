import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; //remove package
import AWS from "aws-sdk";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/app/Utilities/prisma";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

async function uploadFileToS3(file: {}, fileName: string) {
  const fileBuffer = file;

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: `${Date.now()}-${fileName}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };
  const data = await s3.upload(params).promise();

  return data.Location;
}

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  const formData = await req.formData();
  const image = formData.get("image");
  if (!image) {
    //return response error
    return;
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = await uploadFileToS3(buffer, image.name);

  await prisma.setup.create({ data: { image: fileName, userId } });

  return NextResponse.json({ message: "created" });
}

export async function GET(req: Request, res: Response) {
  const setups = await prisma.setup.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({ setups });
}

export async function DELETE(req: NextRequest, res: Response) {
  const params = req.nextUrl.searchParams;
  console.log(params);

  console.log("Delete request");
  return NextResponse.json({ message: "delete" });
}
