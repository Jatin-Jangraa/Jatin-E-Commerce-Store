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
export const productbyid = async (req, res) => {
    try {
        const product = await ProductData.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.json(error);
    }
};
export const allcategory = async (req, res) => {
    try {
        let category = await ProductData.distinct("category");
        res.json(category);
    }
    catch (error) {
        res.json(error);
    }
};
export const allsubcategory = async (req, res) => {
    try {
        let category = await ProductData.distinct("subcategory");
        res.json(category);
    }
    catch (error) {
        res.json(error);
    }
};
export const bycategory = async (req, res) => {
    try {
        const products = await ProductData.find({ category: `${req.params.category}` }).sort({ createdAt: -1 });
        res.json(products);
    }
    catch (error) {
        res.json(error);
    }
};
export const itemcate = async (req, res) => {
    try {
        const data = await ProductData.aggregate([
            {
                $group: {
                    _id: "$category",
                    items: {
                        $push: {
                            name: "$name",
                            image: "$image",
                            subcategory: "$subcategory"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: "$_id",
                    items: 1
                }
            }
        ]);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "message" });
    }
};
export const allsubcate = async (req, res) => {
    try {
        const result = await ProductData.aggregate([
            {
                $group: {
                    _id: "$subcategory",
                    doc: { $first: "$$ROOT" } // pick first document per subcategory
                }
            },
            {
                $replaceRoot: { newRoot: "$doc" }
            }
        ]);
        res.json(result);
    }
    catch (error) {
    }
};
export const search = async (req, res) => {
    try {
        const { name, sort, category, price } = req.query;
        const baseQuery = {
            ...name ? { name: { $regex: name, $options: "i" } } : null,
            ...price ? { price: { $lte: Number(price) } } : null,
            ...category ? { category: category } : null,
        };
        const productsearch = await ProductData.find(baseQuery).sort(sort && { price: sort === "asc" ? 1 : -1 });
        res.json(productsearch);
    }
    catch (error) {
    }
};
