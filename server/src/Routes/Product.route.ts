import express from 'express'
import { allcategory, allproducts, allsubcate, allsubcategory,  bycategory,  deleteproduct, itemcate, newproduct, productbyid, search } from '../Controller/Product.controller.js';


const productroute = express.Router();


productroute.post ("/newproduct" , newproduct )


productroute.put("/update/:id" , ()=>{})
productroute.put("/:id/remove-image" , ()=>{})


productroute.get("/allcategory", allcategory )
productroute.get("/allsubcategory" , allsubcategory )
productroute.get('/itemcate' , itemcate)
productroute.get("/allsubcate" , allsubcate)
productroute.get( "/search" , search)

productroute.get( "/bycategory/:category" ,bycategory)
productroute.get( "/all" , allproducts )
productroute.get("/:id" , productbyid)


productroute.delete("/delete/:id" , deleteproduct)











export default productroute ;