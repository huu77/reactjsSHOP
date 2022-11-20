import React, { useEffect, useState } from "react";
import Sekeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [fiter, setFiter] = useState(data);
  const [loading, setLoading] = useState(false);
  let compomentMouted = true;

  useEffect(() => {
    const getProducer = async () => {
      setLoading(true);
      const reponse = await fetch("https://fakestoreapi.com/products");
      if (compomentMouted) {
        setData(await reponse.clone().json());
        setFiter(await reponse.json());
        setLoading(false);
        console.log(fiter);
      }
      return () => {
        compomentMouted = false;
      };
    };
    getProducer();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Sekeleton height={350} />
        </div>
        <div className="col-md-3">
          <Sekeleton height={350} />
        </div>
        <div className="col-md-3">
          <Sekeleton height={350} />
        </div>
      </>
    );
  };
  const filterPR = (NavLink) => {
    const x = data.filter((y) => y.category === NavLink);
    setFiter(x);
  };
  const ShowSP = () => {
    return (
      <>
        <div className="row justify-content-center my-4 py-2 ">
          <div className="buttons d-flex  w-75 ">
            <button
              type="button"
              className="btn btn-outline-dark me-2 "
              onClick={() => setFiter(data)}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-outline-dark me-2  "
              onClick={() => filterPR("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              type="button"
              className="btn btn-outline-dark me-2 "
              onClick={() => filterPR("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              type="button"
              className="btn btn-outline-dark me-2 "
              onClick={() => filterPR("jewelery")}
            >
              Jewelery
            </button>
            <button
              type="button"
              className="btn btn-outline-dark me-2 "
              onClick={() => filterPR("electronics")}
            >
              Electronic
            </button>
          </div>
        </div>

        {fiter.map((product) => {
          return (
            <>
              <div className="col-md-3 my-4">
                <div className="card h-100 text-center p-4 bolder-0" key={product.id} >
                <NavLink
                      to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top "
                    height="250px"
                    alt={product.title}
                  />
                  </NavLink>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      {product.title.substring(0, 12)}...
                    </h5>

                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark fw-bold"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              LATEAST PRODUCTS
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">
          {loading ? <Loading /> : <ShowSP />}
        </div>
      </div>
    </div>
  );
};

export default Products;
