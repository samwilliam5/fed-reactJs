import { useState } from 'react';
import './food.css'
// import image from'./images/pizza.jpg'
// import chicken from './images/chicken65.jpg'
// import briyani from './images/briyani.jpg'
// import shawarma from './images/shawarma.jpg'
function Food(props) {
    const [price,setPrice]= useState(props.price);
    const clickHandler=()=>{
        let newPrice=(props.price-(props.offer/100)*props.price);
        setPrice(newPrice);
    }
    return(
        <div className='container'>
        <div className='wrapperFood'>
            <div className='Pizza'>
                <img src={props.img} width={120} alt="This is food image" />
         <p>{props.name}</p>
         <p className='price'>{price}</p>
         <p className='offer'>{props.offer}</p>
         
         <button onClick={clickHandler}>Buy</button>
         </div>
        </div>
                </div>
    )
    
}
export default Food;