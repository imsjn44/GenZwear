import cloudinary from "cloudinary";
import productModel from "../models/productModel.js";

//function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    //undefined images lai array ma napathaune
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    //upload each images to cloudinary and return url of each images
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );
    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    // console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Added" });
    // console.log(imagesUrl);
    // console.log(
    //   name,
    //   description,
    //   price,
    //   category,
    //   subCategory,
    //   sizes,
    //   bestseller,
    // );

    // console.log(images);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//function for listing product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

//function for single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
