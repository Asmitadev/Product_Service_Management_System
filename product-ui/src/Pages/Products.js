import { useEffect, useState } from "react";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://localhost:7139/api/products")

            .then((res) => res.json())

            .then((data) => {
                console.log("API DATA:", data);

                setProducts(data);
            })

            .catch((err) => console.log(err));

    }, []);

    return (

        <div className="container mt-4">

            <h2 className="mb-3">Products</h2>

            <table className="table table-striped table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                    </tr>

                </thead>

                <tbody>

                    {products.length > 0 ? (

                        products.map((p) => (

                            <tr key={p.productId}>

                                <td>{p.productId}</td>
                                <td>{p.productName}</td>
                                <td>{p.category}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td>{p.description}</td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="6">No Products Found</td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}