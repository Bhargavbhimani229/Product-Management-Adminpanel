# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🛍️ Product Management System

A complete **E-commerce product management system** built with **React (Vite)** and powered by **JSON Server** for backend simulation. This application includes both **Admin Panel (CRUD)** and **Client-side features** like cart, search, filter, sort, and much more.

---

## 🚀 Live Preview

> _Coming Soon_ or _Host using Vercel / Netlify / Render_

---

## 🧰 Tech Stack

| Technology | Usage |
|------------|--------|
| React (Vite) | Frontend |
| useState / useEffect | State Management |
| Axios | HTTP Client |
| JSON Server | Mock API Backend |
| Tailwind CSS / Bootstrap | Styling |
| React Icons | Icons |
| React Toastify | Notifications |

---

## 📁 Project Structure

```
product-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   ├── Filters.jsx
│   │   └── SearchSort.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── AdminPanel.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── api.js
├── db.json
├── package.json
└── vite.config.js
```

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/product-management-system.git
cd product-management-system
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start JSON Server

Make sure your `db.json` is at the root level.

```bash
npx json-server --watch db.json --port 5000
```

### 4️⃣ Run React App

```bash
npm run dev
```

---

## 🧠 Core Features

### 🛠️ Admin Panel

- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ View product list
- ✅ Uses Axios to sync with JSON Server

### 🛍️ Client Side

- ✅ Product listing (image, name, SKU, brand, category, rating, price)
- ✅ Add to cart (with quantity)
- ✅ Cart total calculation
- ✅ Search by name or SKU
- ✅ Sort by price, rating, brand
- ✅ Filter by category, brand, stock
- ✅ Rating-based sorting
- ✅ In-stock / out-of-stock filter

---

## 📊 Bonus Features

- 📈 Product statistics (optional):
  - Product count by category
  - Out-of-stock count
  - Average price per category

---

## 📸 Screenshots

> Add screenshots or screen recording GIFs of the UI here for Admin Panel, Product List, Cart, Filter UI, etc.

---

## 🔗 API Functions (`api.js`)

```js
const API_URL = "http://localhost:5000/products";

export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (data) => axios.post(API_URL, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
```

---

## ✨ UI/UX Highlights

- Tailwind/Bootstrap-based responsive layout
- Product hover zoom effects
- Toastify for all alerts and messages
- Mobile-friendly UI
- Optional modal for product CRUD

---

## 📝 Sample Categories

Minimum 20 products categorized into:

- 👕 menswear
- 💻 laptops
- 📱 mobiles
- 📺 electronics
- 🪑 furniture

Each category includes 3–5 products with varying brands and ratings.

---

## ✅ Final Checklist

| Feature                            | Status |
|-----------------------------------|--------|
| CRUD with Axios                   | ✅     |
| JSON Server Integration           | ✅     |
| 20+ Product Entries               | ✅     |
| Cart Management (Qty + Total)     | ✅     |
| Search & Sort Functionality       | ✅     |
| Filter by Category & Brand        | ✅     |
| Rating-based Sorting              | ✅     |
| In Stock Filter                   | ✅     |
| Clean, Responsive UI/UX           | ✅     |

---

## 📌 Author

👨‍💻 **Bhargav Bhimani**  
📧 bhargavbhimani229@gmail.com

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- ReactJS
- JSON Server
- Tailwind CSS / Bootstrap
- React Icons
- React Toastify
