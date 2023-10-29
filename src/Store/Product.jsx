import { useEffect, useState } from "react"
import ProductAfichage from "./ListProdact"

export default function ProductList() {

    const [prodactList, setProdact] = useState([])
    const [categorice, setCategorice] = useState([])
    const [searchInput, setsearchInput] = useState('')

    //her is a Api for a Prodact list 
    const getProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(Response => Response.json())
            .then(Response => setProdact(Response))

    }

    //her is a Api for a Categoris List  

    const getCategoris = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(Response => Response.json())
            .then(Response => setCategorice(Response))

    }

    const DisplayCategorice = () => {
        return categorice.map(categorice =><button  className="btn btn-secondary">{categorice}</button>
    )
    }

    useEffect(
        () => {
            getProduct()
            getCategoris()
        }, []
    )

    const DisplayProdact = () => {
        const prodactTump = prodactList.filter(prodact => {
            return prodact.title.startsWith(searchInput) || prodact.id.toString().startsWith(searchInput) || prodact.description.startsWith(searchInput)
        })

        if (prodactTump.length > 0) {
            return prodactTump.map((product, key) => {
                return <ProductAfichage products={product} key={key} />
            })
        }
        return <tr>
            <td colSpan={7}>NO Itemes</td>
        </tr>
    }

    const handelSearch = (e) => {
        const serchvalu = document.querySelector('#Search').value
        setsearchInput(serchvalu)
        e.preventDefault()
    }

    const handelReset = (e) => {
        const serchvalu = document.querySelector('#Search').value
        return 
        e.preventDefault()
    }
    


    return <div className="container-fluix mx-auto w-75 my-4">
        <h2>Search Product :</h2>
        <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="form-label">Search :</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="Search" className="form-control" />
                </div>
                <div className="col-auto">

                    <input className="btn btn-primary" type="submit" value='Search' onClick={handelSearch} />
                </div>
                <div className="col-auto">

<input className="btn btn-primary" type="submit" value='Reset' onClick={handelReset} />
</div>

            </div>
            <h5>categories : </h5>
            <div className="row g-3 align-items-center">
                <div className="btn-group">  
                {DisplayCategorice()}
                </div>
            </div>


        </form>
        <h1>Product Luist :</h1>
        <div className="table-container">
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
                    {DisplayProdact()}

                </tbody>
            </table>
        </div>

    </div>
}