import express from 'express';
import 'dotenv/config';
import dbConnect from './dbConnect.js';
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js';
import {notFound} from './middleware/notFound.js';

const app = express();
app.use(express.json());
app.use(cors);

const PORT = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Task Manager API");
});
app.use("/api/v1/tasks",taskRoutes);
app.use(notFound);
;(
    async() =>{
        try {
            await dbConnect(process.env.MONGODB_URL);
            console.log("Database connected....")
            app.listen(PORT,console.log(`Server is Running at ${PORT}`))
        } catch (error) {
            console.log("Error! While Connecting to DB",error);
        }
    }
)();
