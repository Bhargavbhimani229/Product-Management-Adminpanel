import React, { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";

const App = () => {
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [options, setOption] = useState([]);
  const [isEdit, setEdit] = useState(0);
  const [error, setError] = useState({});
  const imageRef = useRef(null);
  const navigator = useNavigate();

  useEffect(() => {
    let oldProduct = JSON.parse(localStorage.getItem("Products")) || [];
    setProductList(oldProduct);
  }, []);

  const handleChange = (e) => {
    let { name, value, checked, files } = e.target;

    if (name === "options") {
      let newList = [...options];
      if (checked) {
        newList.push(value);
      } else {
        newList = newList.filter((item) => item !== value);
      }
      setOption(newList);
      setProduct({ ...product, options: newList }); 
    } else if (name === "image") {
      let file = files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        let imageData = {
          name: file.name,
          type: file.type,
          url: reader.result,
        };
        setProduct({ ...product, image: imageData });
      };
      reader.readAsDataURL(file);
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const validation = () => {
    let errors = {};
    if (!product.pName) errors.pName = "Product name is required";
    if (!product.stock) errors.stock = "Stock is required";
    if (!product.price) errors.price = "Price is required";
    if (!product.image) errors.image = "Image is required";
    if (!product.content) errors.content = "Content is required";
    if (!product.options || product.options.length === 0)
      errors.options = "Options are required";

    setError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (isEdit) {
      let updateList = productList.map((val) =>
        val.id === isEdit ? { ...product, id: isEdit } : val
      );
      setProductList(updateList);
      localStorage.setItem("Products", JSON.stringify(updateList));
      setEdit(0);
    } else {
      const updatedList = [...productList, { ...product, id: Date.now() }];
      setProductList(updatedList);
      localStorage.setItem("Products", JSON.stringify(updatedList));
    }
    setProduct({});
    setOption([]);
    setError({});
    if (imageRef.current) imageRef.current.value = "";
  };

  const handleDelete = (id) => {
    let newData = productList.filter((item) => item.id !== id);
    setProductList(newData);
    localStorage.setItem("Products", JSON.stringify(newData));
  };

  const handleEdit = (id) => {
    let prod = productList.find((item) => item.id === id);
    setProduct(prod);
    setOption(prod.options || []);
    setEdit(id);
    navigator("/form");
  };

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
              imageRef={imageRef}
              error={error}
            />
          }
        />
        <Route
          path="/table"
          element={
            <Table
              productList={productList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
