import { useEffect, useState } from "react"

export default function ProductList(){

    const [prodact ,setProdact] =useState([])

    const getProduct = ()=>{
         fetch ('https://fakestoreapi.com/products')
        .then(Response=>Response.json())
        .then(Response =>setProdact(Response))
        
    }

    useEffect(
        ()=>{
            getProduct()
        },[]
    )




    return <div className="container-fluix mx-auto w-75 my-4">
        <h1>Product Luist :</h1>
        <div >
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R1C1</td>
                        <td>R1C2</td>
                        <td>R1C3</td>
                        <td>R1C3</td>
                        <td>R1C3</td>
                        <td>R1C3</td>
                        <td>R1C3</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        
    </div>
}