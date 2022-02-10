const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("MONGODB WORKS!");
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
  });
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res)=>{
    res.send("Welcome to Sidstagram!");
})//I might have to remove this later!

/*app.get("/users", (req, res)=>{
    res.send("User Page here!");
})*/

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
    console.log("FLIGHT TEAM STAND UP!");
})