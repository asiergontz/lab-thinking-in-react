import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products, search}){

return (
    <table className="table">
        <thead className="table-secondary text-muted">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>

{products
.filter((singleProduct) => {
    if (
        singleProduct.name.toLowerCase().includes(search.toLowerCase())
    ) {
        return true
    }
})
    .map((product) => { 
                return <ProductRow singleProduct={product} key= {product.name}/>})}   
        </tbody>
    </table>
)
}
export default ProductTable
