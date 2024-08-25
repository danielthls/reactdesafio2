import { Outlet } from "react-router-dom";
import ProductHeader from "../../../components/ProductHeader";

export default function Products() {
    return (
        <main>
            <ProductHeader />
            <Outlet />
        </main>
    )
}