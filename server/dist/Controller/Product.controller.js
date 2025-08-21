import ProductData from "../Models/Product.model.js";
export const newproduct = async (req, res) => {
    try {
        const { name, price, discount, quantity, available, colors, category, subcategory } = req.body;
        // const images = req.files.map((file) => file.path);
        const newproduct = await ProductData.create({
            name, price, discount, quantity, available, colors, category, subcategory
        });
        res.json(newproduct);
    }
    catch (error) {
        res.json(error);
    }
};
export const allproducts = async (req, res) => {
    try {
        const products = await ProductData.find({}).sort({ createdAt: -1 });
        res.json(products);
    }
    catch (error) {
        res.json(error);
    }
};
export const deleteproduct = async (req, res) => {
    try {
        await ProductData.findByIdAndDelete(req.params.id);
        res.json({ message: "PRoduct Deleted" });
    }
    catch (error) {
        res.json(error);
    }
};
