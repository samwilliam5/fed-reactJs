import './body.css'
import Food from './food';
function Body(props) {
    return(<div className='food'>
  <Food name={props.food[0].name} price={props.food[0].price} ></Food>
  <Food name={props.food[1].name} price={props.food[1].price} ></Food>
  <Food name={props.food[2].name} price={props.food[2].price} ></Food>
  <Food name={props.food[3].name} price={props.food[3].price} ></Food>

  </div>
    )
    
}
export default Body;