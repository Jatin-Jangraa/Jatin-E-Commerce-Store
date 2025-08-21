import express from 'express'
import { allproducts, deleteproduct, newproduct, productbyid } from '../Controller/Product.controller.js';


const productroute = express.Router();


productroute.post ("/newproduct" , newproduct )

productroute.put("/update/:id" , ()=>{})
productroute.put("/:id/remove-image" , ()=>{})

productroute.get( "/all" , allproducts )
productroute.get("product/:id" , productbyid)


productroute.delete("/delete/:id" , deleteproduct)




export default productroute ;