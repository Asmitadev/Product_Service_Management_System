import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import AddProduct from "./Pages/AddProduct";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;