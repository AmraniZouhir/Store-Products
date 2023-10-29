import Rating from "./Rating";

export default function ProductAfichage({ products }) {
    return <tr>
        <td>{products.id}</td>
        <td>{products.title}</td>
        <td>{products.price}$</td>
        <td>{products.description.slice(0,100)} ...</td>
        <td>{products.category}</td>
         <td><img width={225} src={products.image} alt=".title" /></td>
        <td><Rating rate={products.rating.rate} count={products.rating.count}  /></td>

    </tr>
    
}