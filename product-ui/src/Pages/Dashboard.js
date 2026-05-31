import { useEffect, useState } from "react";

export default function Dashboard() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        fetch("https://localhost:7139/api/products/count")

            .then((res) => res.json())

            .then((data) => {
                setCount(data);
            })

            .catch((err) => console.log(err));

    }, []);

    return (

        <div className="container mt-4">

            <h1 className="mb-4 text-center">
 Dashboard
            </h1>

            <div className="row">

                {/* Total Products Card */}
                <div className="col-md-4 mb-4">

                    <div className="card shadow-lg border-0 rounded-4 text-center p-4">

                        <h5 className="text-muted">
                            Total Products
                        </h5>

                        <h1 className="display-4 text-primary">
                            {count}
                        </h1>

                    </div>

                </div>

                {/* Categories Card */}
                <div className="col-md-4 mb-4">

                    <div className="card shadow-lg border-0 rounded-4 text-center p-4">

                        <h5 className="text-muted">
                            Categories
                        </h5>

                        <h1 className="display-4 text-success">
                            5
                        </h1>

                    </div>

                </div>

                {/* Quantity Card */}
                <div className="col-md-4 mb-4">

                    <div className="card shadow-lg border-0 rounded-4 text-center p-4">

                        <h5 className="text-muted">
                            Total Quantity
                        </h5>

                        <h1 className="display-4 text-danger">
                            140
                        </h1>

                    </div>

                </div>

            </div>

            {/* Welcome Section */}

            <div className="card mt-4 shadow border-0 rounded-4 p-4">

                <h3>
                    Welcome to Product Inventory System 🚀
                </h3>

                <p className="text-muted">

                    This dashboard is connected with your ASP.NET Core backend
                    and SQL Server database.

                </p>

            </div>

        </div>
    );
}