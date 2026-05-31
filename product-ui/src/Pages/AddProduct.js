import { useState } from "react";

export default function AddProduct() {

    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        stock: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Added:", form);
        alert("Product added successfully!");
    };

    return (
        <div>

            {/* TITLE */}
            <h2 className="fw-bold text-dark">
                Add New Product
            </h2>

            {/* FORM CARD */}
            <div className="card shadow-lg border-0 mt-3 p-4" style={{ maxWidth: "600px" }}>

                <form onSubmit={handleSubmit}>

                    {/* PRODUCT NAME */}
                    <div className="mb-3">
                        <label style={{ fontWeight: "600" }}>Product Name</label>
                        <input
                            name="name"
                            className="form-control"
                            placeholder="Enter product name"
                            onChange={handleChange}
                        />
                    </div>

                    {/* CATEGORY */}
                    <div className="mb-3">
                        <label style={{ fontWeight: "600" }}>Category</label>
                        <input
                            name="category"
                            className="form-control"
                            placeholder="Enter category"
                            onChange={handleChange}
                        />
                    </div>

                    {/* PRICE */}
                    <div className="mb-3">
                        <label style={{ fontWeight: "600" }}>Price</label>
                        <input
                            name="price"
                            className="form-control"
                            placeholder="Enter price"
                            onChange={handleChange}
                        />
                    </div>

                    {/* STOCK */}
                    <div className="mb-3">
                        <label style={{ fontWeight: "600" }}>Stock</label>
                        <input
                            name="stock"
                            className="form-control"
                            placeholder="Enter stock quantity"
                            onChange={handleChange}
                        />
                    </div>

                    {/* BUTTON */}
                    <button className="btn btn-primary w-100">
                        Add Product
                    </button>

                </form>

            </div>

        </div>
    );
}