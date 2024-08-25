import ProductList from "../../../../components/ProductList"



export default function Electronics() {
    const products = ['Eletrônico 1', 'Eletrônico 2', 'Eletrônico 3'];
    return (
        <ProductList list={products} />
    )
}