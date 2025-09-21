import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    brand: "Apple",
    price: 999,
    category: "Electronics",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1695071332413",
  },
  {
    id: 2,
    name: "Air Jordan 1",
    brand: "Nike",
    price: 199,
    category: "Fashion",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7d5f62ed-8850-47f1-b6a1-9a2147f1f230/air-jordan-1-mid-shoes-3DzR0D.png",
  },
  {
    id: 3,
    name: "The Da Vinci Code",
    brand: "Dan Brown",
    price: 15,
    category: "Books",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
  },
];

const ProductListing = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-500">{product.brand}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <p className="text-sm mt-1 text-gray-400">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
