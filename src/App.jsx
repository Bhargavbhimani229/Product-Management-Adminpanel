import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Table from "./pages/Table";
import Client from "./pages/Client";

const App = () => {
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  const [options, setOption] = useState([]);
  const [isEdit, setEdit] = useState(0);
  const [error, setError] = useState({});
  const imageRef = useRef(null);
  const navigator = useNavigate();

  const URL = "http://localhost:3000/Product";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setProductList(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;

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
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = {
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
    const errors = {};
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    try {
      if (isEdit) {
        await axios.put(`${URL}/${isEdit}`, { ...product, id: isEdit });
        toast.success("Product Updated Successfully..!");
      } else {
        await axios.post(URL, { ...product });
        toast.success("Product Added Successfully..!");
      }

      const res = await axios.get(URL);
      setProductList(res.data);

      setProduct({});
      setOption([]);
      setError({});
      imageRef.current.value = "";
      setEdit(0);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      const res = await axios.get(URL);
      setProductList(res.data);
      toast.warn("Product Deleted Successfully..!");
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      setProduct(res.data);
      setOption(res.data.options || []);
      setEdit(id);
      navigator("/form");
    } catch (err) {
      console.error("Edit fetch error:", err);
    }
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
        <Route
          path="/client"
          element={
            <Client
              productList={productList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />

        
        
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
