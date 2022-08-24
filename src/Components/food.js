import './food.css'
import image from'./images/pizza.jpg'
function Food(props) {
    return(
        <div className='container'>
        <div className='wrapperFood'>
            <div className='Pizza'>
                <img src={image } width={120} alt="This is food image" />
         <p>{props.name}</p>
         <p className='price'>{props.price}</p>
         <button>Buy</button>
         </div>
        </div>
                </div>
    )
    
}
export default Food;