import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path: "./env"
});

connectDB()

.then(() => {
    application.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runing on port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`MONGO DB connection failed !!!`, error);
})



// import express from 'express';

// const app = express();

// (async() => {
//     try {
//         await mongoose.connect(`${proscess.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR:", error);
//             throw error;

//             app.listen(process.env.PORT, () => {
//                 console.log(`Server is running on port ${process.env.PORT}`);

//             })
//         })
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })