import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectdb from './Config/database.js';
import userroute from './Routes/User.Route.js';
import productroute from './Routes/Product.route.js';
const app = express();
connectdb();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// app.use(express.static(path.join(__dirname,"../../client/dist")))
// control only by admin
app.use("/api/v1/user", userroute);
// // control only by admin
// app.use("/api/v1/order",orderroute)
app.use("/api/v1/product", productroute);
// // if admin
// app.use ("/api/v1/dashboard",dashroute)
// //fetch location 
// app.use("/api/v1/location" ,locationfetch)
// // get mail of user  
// app.post ("/api/v1/contact",contact)
// // send orderdetails to user on mail
// app.post("/api/v1/confirm",confirmOrder)
// app.use('/menu',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/menu',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/menu/:id',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/cart',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/shipping',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/login',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/contact',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/Profile',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/shipping',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/dashboard',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/orders',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/product',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/pie',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/bar',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
// app.use('/admin/customer',(req,res)=>{   res.sendFile(path.join(__dirname,"../../client/dist",'index.html'))})
app.listen(PORT, () => {
    console.log(`Express is runnung on Port ${PORT}`);
});
