import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "./../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id == productId) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- product images ----------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="product_image"
              />
            ))}
          </div>

          <div className="w-4 sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product_img" />
          </div>
        </div>

        {/*---------- product info ----------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(134)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 hover:bg-gray-300 bg-gray-100 ${item === size ? "border-yellow-400" : " border-slate-200"} `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return and exchange policy.</p>
          </div>
        </div>
      </div>
      {/* Description and review section */}
      <div className="mt-20">
        <div className=" flex">
          <b className="border border-slate-400 px-5 py-3 text-sm ">
            Decription
          </b>
          <p className="border  border-slate-400 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border  border-slate-400 text-sm text-gray-500 px-5 py-3">
          Upgrade your everyday style with this Men’s Round Neck Pure Cotton
          T-Shirt. Made from 100% premium cotton, it offers superior comfort,
          breathability, and a soft feel against the skin. The classic round
          neck design and regular fit make it perfect for casual outings,
          layering, or daily wear. Durable stitching and color retention ensure
          long-lasting performance even after multiple washes.
          <li>✔ 100% Pure Cotton</li>
          <li>✔ Soft & Breathable Fabric</li>
          <li>✔ Classic Round Neck</li>
          <li>✔ Comfortable Regular Fit</li>
          <li>✔ Ideal for Daily & Casual Wear</li>
        </div>
      </div>

      {/*display related product */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
