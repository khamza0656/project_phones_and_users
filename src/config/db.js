import mongoose from "mongoose";


export default async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/users");
    console.log("MongoDB успешно подключен");
  } catch (err) {
    console.log("Ошибка при подключении к MongoDB", err.message);
    process.exit(1);
  }
};
