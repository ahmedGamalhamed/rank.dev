'use server';
import { v2 as cloudinary } from 'cloudinary';
import { v1 as uuidv1 } from 'uuid';

const cloudinaryKeys = {
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL,
};

cloudinary.config({
  cloud_name: cloudinaryKeys.CLOUDINARY_CLOUD_NAME,
  api_key: cloudinaryKeys.CLOUDINARY_API_KEY,
  api_secret: cloudinaryKeys.CLOUDINARY_API_SECRET,
});

export const saveImage = async (base64Image: string, userId: string) => {
  try {
    const res = await cloudinary.uploader.upload(base64Image, {
      public_id: userId + uuidv1(),
    });
    return res.url;
  } catch (e) {
    console.log('cloudinary Error\n', e);
    return false;
  }
};
