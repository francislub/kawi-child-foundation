import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI);

        const connection = mongoose.connection;

        connection.once('connected', () => {
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDb connection error: ' + err);
            process.exit();
        })
    } catch (error) {
        console.log(error.message);
    }
}

