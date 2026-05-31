import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>

            {/* SIDEBAR */}
            <div
                style={{
                    width: "260px",
                    background: "linear-gradient(180deg,#1e3a8a,#111827)",
                    color: "white",
                    padding: "20px"
                }}
            >

                {/* BRAND TITLE */}
                <h4 style={{ fontWeight: "bold", marginBottom: "30px" }}>
                    🚀 Product & Service System
                </h4>

                {/* MENU */}
                <div className="d-flex flex-column gap-3">

                    <Link style={linkStyle} to="/">🏠 Dashboard</Link>

                    <Link style={linkStyle} to="/products">📦 Products</Link>

                    <Link style={linkStyle} to="/services">🛠 Services</Link>

                    <Link style={linkStyle} to="/add-product">➕ Add Product</Link>

                </div>

            </div>

            {/* MAIN CONTENT */}
            <div style={{ flex: 1, background: "#f3f4f6", padding: "20px" }}>
                {children}
            </div>

        </div>
    );
}

/* LINK STYLE */
const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.08)",
    transition: "0.3s"
};