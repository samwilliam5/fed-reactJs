import { useState } from 'react';
import './food.css'

function Food(props) {
    const [price, setPrice] = useState(props.price);
    const clickHandler = () => {
        let newPrice = (props.price - (props.offer / 100) * props.price);
        setPrice(newPrice);
    }
    return (
        <div className='container'>
            <div className='wrapperFood'>
                <a>
                <div className='Pizza'>
                    <img src={props.img} width={200} alt="This is food image" />
                    <p>{props.name}</p>
                    <p className='price'>{"Rs."}{price}</p>
                    <p className='offer'>{props.offer}{"% Offer"}</p>

                    <button onClick={clickHandler}>Buy</button>
                </div>
                </a>
            </div>
        </div>
    )

}
export default Food;