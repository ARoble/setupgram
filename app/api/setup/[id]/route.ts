import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/Utilities/prisma";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function DELETE(req: NextRequest, context: any) {
  const { params } = context;
  const { id } = params;

  const setup = await prisma.setup.findFirst({ where: { id } });
  const splitImage = setup?.image.split("/");
  const imageKey = splitImage[splitImage?.length - 1];

  const deleteImageFromBucket = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: imageKey,
  };
  await s3.deleteObject(deleteImageFromBucket).promise();

  await prisma.setup.delete({ where: { id } });

  return NextResponse.json({ message: "delete" });
}
