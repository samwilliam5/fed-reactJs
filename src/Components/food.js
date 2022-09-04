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
                    <p>{props.item}</p>
                    <p className='price'>{"Rs."}{price}</p>
                    <p className='offer'>{props.offer}{"% Offer"}</p>

                    <button onClick={clickHandler}>Buy</button>
                </div>
                </a>
            </div>
        </div>
    )

}

// class Collections extends Component {
//     render() {
//             const [price, setPrice] = useState(this.props.price)

//      button() {
//         let newprice = props.price - (props.offer/100)*props.price;
//         this.setPrice(newprice);
//     }
//         return (
//             <div>
//                 <div className="collection-container">
//                     <div className='item1'>
//                         <div className='img'>
//                             <img src={image} width={150} height={150}></img>
//                         </div>
//                         <div className='details'>
//                             <h2>{this.props.item}</h2>
//                             <p>{this.props.offer}{"%Offer"}</p>
//                             <p>{"Rs."}{this.price}</p>
//                             <p>{this.props.restaurant}</p>
//                             <button onClick={this.state.button}>Apply Offer</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );

//     }
// }
export default Food;