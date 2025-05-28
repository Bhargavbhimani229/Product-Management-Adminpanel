import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";

const App = () => {
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [options, setOption] = useState([]);

  const handleChange = (e) => {
    let { name, value, checked, files } = e.target;
    if (name == "options") {
      let newList = [...options];
      if (checked) {
        newList.push(value);
      } else {
        newList = newList.filter((item) => item != value);
      }
      console.log(newList);

      setOption(newList);
    }
    if (name == "image") {
      let file = files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        let imageData = {
          name: file.name,
          type: file.type,
          url: reader.result,
        };
        value = imageData;
        setProduct({ ...product, [name]: value });
      };
      reader.readAsDataURL(file);
    } else {
      setProduct({ ...product, options, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, { ...product, id: Date.now() }]);
    setProduct({});
    setOption([]);
  };

  const handleDelete = (id) =>{
    let newData = productList.filter((item) => item.id != id);
    setProductList(newData);

  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <Form
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              product={product}
              options={options}
            />
          }
        />
        <Route path="/table" element={<Table 
        productList={productList} 
        handleDelete={handleDelete} />} />
      </Routes>
    </>
  );
};

export default App;
