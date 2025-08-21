

import  { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../../Components/Sidebar";
import phone from '../../assets/phone.png'


const Productmanage = () => {
  // const [products, setProducts] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [editingProduct, setEditingProduct] = useState(null);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: "",
  //   ingredients: "",
  //   available: true,
  //   images: [],
  // });

  // console.log(products);
  

  // console.log(formData);
  

  // const [newImages,setNewImages] = useState({})

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const res = await productapi.get("/");
  //   setProducts(res.data);
  // };

  // const handleOpenAddModal = () => {
    
  //   setEditingProduct(null);
  //   setFormData({
  //     name: "",
  //     price: "",
  //     ingredients: "",
  //     available: true,
  //     images: [],
  //   });
  //   setNewImages([]);
  //   setShowModal(true);
  // };

  // const handleEditProduct = (product) => {
  //   setEditingProduct(product);
  //   setFormData({ ...product });
  //   setNewImages([]);
  //   setShowModal(true);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: name === "available" ? value === "true" : value,
  //   }));
  // };

  // const handleImageUpload = (e) => {
  //   setNewImages(Array.from(e.target.files));
  // };

  // const handleDeleteImage = async (imageUrl) => {
  //   if (!editingProduct) return;

  //   const res = await productapi.post(`/${editingProduct._id}/remove-image`, { imageUrl });
  //   setFormData((prev) => ({
  //     ...prev,
  //     images: res.data.images,
  //   }));
  // };

  // const handleSubmit = async () => {
  //   const data = new FormData();
  //   data.append("name", formData.name);
  //   data.append("price", formData.price);
  //   data.append("ingredients", formData.ingredients);
  //   data.append("available", formData.available);
  //   formData.images.forEach((img) => data.append("existingImages[]", img));
  //   newImages.forEach((file) => data.append("images", file));

  //   if (editingProduct) {
  //     await productapi.put(`/${editingProduct._id}`, data);
  //   } else {
  //     await productapi.post("/", data);
  //   }

  //   fetchProducts();
  //   setShowModal(false);
  // };

  // const handleDelete = async (id) => {

  //   const confirm   = window.confirm("Are you sure to Delete Product .")

  //   if(confirm){

  //     await productapi.delete(`/${id}`);
  //   fetchProducts()
  // }
  // };

  // const toggleAvailability = async (product) => {
  //   await productapi.put(`/${product._id}`, {
  //     ...product,
  //     available: !product.available,
  //     existingImages: product.images,
  //   });
  //   fetchProducts();
  // };

  return (
    <div className='w-full h-[calc(100vh-4rem)] lg:flex  overflow-y-scroll no-scrollbar'>
      <Sidebar />
     <div className='adminbox  w-full bg-amber-200  lg:w-[calc(100vw-17.5rem)] h-full flex  overflow-y-scroll no-scrollbar  py-4 px-2 '>
        <motion.div className="admin-productcontaine w-full px-3 lg:px-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="font-bold text-center mb-10 mt-5">Product Control Panel</h2>

          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <button className="btnclass add-btn bg-[#6366f1] text-white p-[1rem]" onClick={()=>{'handleOpenAddModal'}}>+ Add Product</button>
          </div>

          <div className="table-wrapper overflow-x-auto">
            <motion.table className="product-table w-full border-collapse bg-[#f9f9f9] rounded-xl px-2 overflow-hidden ">
              <thead>
                <tr className=" w-full overflow-x-scroll">
                  <th className="tableclass">Image</th>
                  <th className="tableclass">Name</th>
                  <th className="tableclass">Price(₹)</th>
                  <th className="tableclass">Ingredients</th>
                  <th className="tableclass">Availability</th>
                  <th className="tableclass">Action</th>
                </tr>
              </thead>
              <tbody >
                {/* {products.map((product) => ( */}
                  <motion.tr key={1} className=" h-auto border-b">
                    <td className="tableclass">
                      <img
                        src={phone}
                        alt="Product"
                        className="product-img w-[60px] h-[60px] bg-cover rounded"
                      />
                    </td>
                    <td className="tableclass">{"Phone"}</td>
                    <td className="tableclass">{10000}</td>
                    <td className="tableclass">{"lsdafkj"}</td>
                    <td className="tableclass">
                      <button
                        className={`btnclass  "available" : "not-available"}`}
                        // onClick={() => toggleAvailability(product)}
                        onClick={() => ("")}

                      >
                        { "Available" }
                      </button>
                    </td >
                    <td className="tableclass flex flex-col h-full gap-3">
                      {/* <button className="btn manage-btn" onClick={() => handleEditProduct(product)}>Manage</button>
                      <button className="btn delete-btn" onClick={() => handleDelete(product._id)}>Delete</button> */}

                       <button className="btnclass manage-btn bg-[#3b82f6] text-white" onClick={() => {}}>Manage</button>
                      <button className="btnclass delete-btn bg-[#ef4444] text-white" onClick={() => {}}>Delete</button>
                    </td>
                  </motion.tr>
               
              </tbody>
            </motion.table>
          </div>

          {/* <AnimatePresence>
            {showModal && (
              <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="modal-content" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
                  <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
                  <input name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
                  <select name="available" value={formData.available} onChange={handleChange}>
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                  </select>
                  <label>Upload New Images:</label>
                  <input type="file" multiple onChange={handleImageUpload} />
                  <div className="image-preview">
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="image-item">
                        <img src={img} alt="preview" />
                        <button className="delete-image" onClick={() => handleDeleteImage(img)}>X</button>
                      </div>
                    ))}
                  </div>
                  <div className="modal-actions">
                    <button className="btn save-btn" onClick={handleSubmit}>Save</button>
                    <button className="btn cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Productmanage;