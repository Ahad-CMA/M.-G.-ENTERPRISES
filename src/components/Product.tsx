import React from "react";
import {  Target } from 'lucide-react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import product1 from './svgs/asianpaints.jpeg';
import product2 from './svgs/berger.png';
import product3 from './svgs/drfixit.jpg';
import product4 from './svgs/dulux.jpg';
import product5 from './svgs/jotun.svg';
import product6 from './svgs/kansainerolac.png';
import product7 from './svgs/newworldpaints.jpeg';
import './product.css'


const ProductsUsed: React.FC = () => {
  const images = [product1, product2, product3, product4, product5, product6, product7];


  return (
    <section className="products-section my-5">
      <div className="d-flex"><p className="inline-flex gap-2 items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium"><Target></Target>Products</p></div>
      <h1 className="card-title fw-bold fs-1 text-center">We Use Quality Products</h1>
      <div className="d-flex" style={{width:'100vw'}}>
        <div className="product-wrap">
          {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            className="products-img"
          />
        ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsUsed;