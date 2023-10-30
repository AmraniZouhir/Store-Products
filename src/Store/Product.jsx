import { useEffect, useState } from "react"
import ProductAfichage from "./ListProdact"

export default function ProductList() {

    const [prodactList, setProdact] = useState([])
    const [categorice, setCategorice] = useState([])
    const [searchInput, setsearchInput] = useState('')
    // for Select categirise
    const [selectedCategory, setSelectedCategory] = useState(null);


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

   

    useEffect(
        () => {
            getProduct()
            getCategoris()
        }, []
    )

    // const DisplayProdact = () => {
    //     const prodactTump = prodactList.filter(prodact => {
    //         return prodact.title.startsWith(searchInput) || prodact.id.toString().startsWith(searchInput) || prodact.description.startsWith(searchInput)
    //     })

    //     if (prodactTump.length > 0) {
    //         return prodactTump.map((product, key) => {
    //             return <ProductAfichage products={product} key={key} />
    //         })
    //     }
    //     return <tr>
    //         <td colSpan={7}>NO Itemes</td>
    //     </tr>
    // }
    const displayProducts = () => {
        const filteredProducts = prodactList.filter((product) => {
          const matchesSearch =
         
            product.title.startsWith(searchInput) ||
            product.id.toString().startsWith(searchInput) ||
            product.description.startsWith(searchInput);
    
          const matchesCategory =
            selectedCategory === null || product.category === selectedCategory;
    
          return matchesSearch && matchesCategory;
        });
    
        return filteredProducts.length > 0 ? (
          filteredProducts.map((product, key) => (
            <ProductAfichage products={product} key={key} />
          ))
        ) : (
          <tr>
            <td colSpan={7}>No Items</td>
          </tr>
        );
      };

     const displayCategories = () => {
  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return categorice.map((category, index) => (
    <button
      key={index}
      className={`btn ${
        selectedCategory === category ? "btn-dark" : "btn-secondary"
      }`}
      onClick={(e) => handleCategoryClick(category, e)}
    >
      {category}
    </button>
  ));
};


    const handelSearch = (e) => {
        const serchvalu = document.querySelector('#Search').value
        setsearchInput(serchvalu)
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

    <input className='btn btn-secondary' type="reset" value='Reset' onClick={() => {
                            setsearchInput(undefined)
                        }}/></div>

            </div>
            <h5>categories : </h5>
            <div className="row g-3 align-items-center">
            <div className="btn-group">{displayCategories()}</div>

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
                <tbody>{displayProducts()}</tbody>

            </table>
        </div>

    </div>
}