import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products, search, check}){

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

.filter((oneproduct) => 
    check ? oneproduct.inStock : true)
    
    .map((product) => { 
                return <ProductRow singleProduct={product} key= {product.name}/>})}   
        </tbody>
    </table>
)
}
export default ProductTable
