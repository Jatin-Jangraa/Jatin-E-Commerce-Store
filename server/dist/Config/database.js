import mongoose from 'mongoose';
const connectdb = async () => {
    try {
        mongoose.connect(process.env.DATABASE, { dbName: "ECommerce" });
        console.log("Databae connected Successfully");
    }
    catch (error) {
    }
};
export default connectdb;
