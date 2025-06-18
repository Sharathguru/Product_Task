import mongoose from 'mongoose';

//db connection

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.log("DB connection error:", err);
        process.exit(1);
    }
}

export default dbConnection;