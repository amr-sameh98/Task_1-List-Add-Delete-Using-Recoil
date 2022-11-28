import React from "react";
import { Typography } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productsState, priceState, titleState } from "../atoms/products-atom";

function AddProduct() {
  const { Title } = Typography;

  const [products, setProducts] = useRecoilState(productsState);
  const [title, setTitle] = useRecoilState(titleState);
  const [price, setPrice] = useRecoilState(priceState);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    products.push({ title: title, price: price });
    setProducts((old) => [...old]);
    setPrice("");
    setTitle("");
    navigate("/");
  };

  return (
    <>
      <Title className="mt-5 mb-0" level={2}>
        Add New Product <FileAddOutlined />
      </Title>
      <form
        onSubmit={handleSubmit}
        className="w-25 m-auto mt-2 border p-3 bg-light"
      >
        <label htmlFor="ProductTitle" className="form-label fs-3 fw-semibold">
          Title
        </label>
        <input
          value={title}
          type="text"
          className="form-control p-2"
          id="ProductTitle"
          placeholder="Type Your Product Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        <label
          htmlFor="ProductPrice"
          className="form-label mt-3 fs-3 fw-semibold"
        >
          Price
        </label>
        <input
          value={price}
          type="number"
          className="form-control p-2"
          id="ProductPrice"
          placeholder="Type Your Product Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />

        <button type="submit" className="btn btn-primary mt-3 fs-4 mt-4">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
