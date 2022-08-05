import { useState } from "react";
import "./newProduct.css";

export default function NewProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("sensei.png");
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0.0);

  //   submit handle
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please a Product!");
      return;
    }
    addProduct({ name, img, stock, status, price });
    setName("");
    setImg("sensei.png");
    setStock(0);
    setStatus("");
    setPrice(0.0);
  };

  const options = [
    {
      label: "Yes",

      value: "Yes",
    },

    {
      label: "No",

      value: "No",
    },
  ];

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={onSubmit}>
        <div className="addProductItem">
          <label htmlFor="image">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            placeholder="stock number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="ksh. 0.00"
            min={0.0}
            step={"0.01"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" onChange={(e) => e.target.value}>
            {options.map((option)=>(
                <option value={option.value}>{option.label}</option>
            ))}
            
          </select>
        </div>
        
        <input type="submit" value={'Add product'} className="addProductButton"/>
      </form>
    </div>
  );
}
