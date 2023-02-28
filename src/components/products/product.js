import { useParams, useNavigate  } from "react-router-dom"
export default function Product({products}) {
    let { id }  = useParams();

    const navigate = useNavigate();
    const mockBuyNow = () => {
        alert('You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let\'s go back to the home page!')
        navigate("/");
        //above will just navigate you back to home page -- but we are not done --> scroll down to button.
    }
    //destructuring and extracting the product from the products array --- before the prior step we are checking each products id in the array with the id given to us and filtering out the specific product we want into the product variable.
    const  [product] = products.filter( product => product.id === id)


        if (product) {return (
            <section>
            <h5>{product.name}</h5>
            <img src={product.image} alt={product.name} />
            <p>{product.type}</p>
            <p>{product.style}</p>
            <p>${product.price}</p>
            <button onClick={mockBuyNow}>Buy Now!</button>
        </section>
        )}
        return (<h1>No products found</h1>)     
}