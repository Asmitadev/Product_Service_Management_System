import { useEffect, useState } from "react";

export default function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch("https://localhost:7139/api/services")

            .then((res) => res.json())

            .then((data) => {

                console.log(data);

                setServices(data);

            })

            .catch((err) => console.log(err));

    }, []);

    return (

        <div className="p-4">

            <h2 className="mb-4">
                Services
            </h2>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Service Name</th>
                        <th>Service Type</th>

                        <th>Duration</th>
                        <th>Description</th>
                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    {services.length > 0 ? (

                        services.map((s, index) => (

                            <tr key={s.serviceId || index}>
                                <td>{s.serviceId}</td>

                                <td>{s.serviceName}</td>

                                <td>{s.serviceType}</td>

                                <td>{s.duration}</td>

                                <td>{s.description}</td>

                                <td>{s.price}</td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td colSpan="6">
                                No Services Found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}