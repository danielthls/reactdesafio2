import ProductList from "../../../../components/ProductList"



export default function Computers() {
    const products = ['Computador 1', 'Computador 2', 'Computador 3'];
    return (
        <ProductList list={products} />
    )
}