import './body.css'
import Food from './food';
function Body(props) {
  return (<div >
    <div className='food'>
    <Food img={props.food[0].img} name={props.food[0].name} price={props.food[0].price} offer={props.food[0].offer} ></Food>
    <Food img={props.food[1].img} name={props.food[1].name} price={props.food[1].price} offer={props.food[1].offer}></Food>
    <Food img={props.food[2].img} name={props.food[2].name} price={props.food[2].price} offer={props.food[2].offer} ></Food>
    <Food img={props.food[3].img} name={props.food[3].name} price={props.food[3].price} offer={props.food[3].offer}></Food>
    </div>
   
  </div>
   
  )

}
export default Body;