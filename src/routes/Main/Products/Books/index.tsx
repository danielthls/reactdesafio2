import ProductList from "../../../../components/ProductList"



export default function Books() {
    const products = ['Livro 1', 'Livro 2', 'Livro 3'];
    return (
        <ProductList list={products} />
    )
}