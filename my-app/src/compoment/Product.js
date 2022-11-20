import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Sekeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import  {addItem } from "../redux/action";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
 
  // const dispatch =useDispatch();
  // const addProduct =(product)=>{
  //   dispatch(addItem(product));
  // }
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await reponse.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  console.log(product);
  const Loading = () => {
    return (
      <>
        {" "}
        <div className="col-md-3">
          <Sekeleton height={400} />
        </div>
        <div className="col-md-3">
          <Sekeleton height={50} width={300}/>
          <Sekeleton height={150} />
          <Sekeleton height={25}  width={200}/>
          <Sekeleton height={200} />
          <Sekeleton height={50} />
        </div>
       
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-4">
          <img
            src={product.image}
            alt={product.title}
            height="450px"
            width="400px"
          />
        </div>
        <div className="col-md-6 my-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <hr />
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            <i class="fa fa-solid fa-star">
              {" "}
              Rating : {product.rating && product.rating.rate}{" "}
            </i>
          </p>
          <h3 className="fw-bolder">Price : {product.price} $</h3>
          <p className="lead my-3">{product.description}.</p>

          <button className="btn btn-outline-dark w-25" >Add To Cart</button>
          <NavLink to="/carts" className="btn btn-dark w-25 mx-4">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
