import './body.css'
import Food from './food';
import image from './images/pizza.jpg'
import chicken from './images/chicken65.jpg'
import briyani from './images/briyani.jpg'
import shawarma from './images/shawarma.jpg'
import Form from'./form';
import { useState } from 'react';


function Body(props) {
  var foodList = [
    {
      img: image,
      item: 'Pizza',
      price: 200,
      offer: 10
    },
    {
      img: briyani,
      item: 'Briyani',
      price: 150,
      offer: 30
    },
    {
      img: shawarma,
      item: 'Shawarma',
      price: 100,
      offer: 40
    },
    {
      img: chicken,
      item: 'Chicken 65',
      price: 120,
      offer: 25
    },
   
  ];
  const[foods,setFoods]=useState([...foodList])
  function updateFoods(newFood) {
    setFoods([...foods,newFood])
    
  }
    return (<div >
    <div className='food'>
      <Form add={updateFoods}></Form>
    {/* <Food img={props.food[0].img} name={props.food[0].name} price={props.food[0].price} offer={props.food[0].offer} ></Food>
    <Food img={props.food[1].img} name={props.food[1].name} price={props.food[1].price} offer={props.food[1].offer}></Food>
    <Food img={props.food[2].img} name={props.food[2].name} price={props.food[2].price} offer={props.food[2].offer} ></Food>
    <Food img={props.food[3].img} name={props.food[3].name} price={props.food[3].price} offer={props.food[3].offer}></Food> */}
 {foods.map((food)=>{
return(
  <Food key={Math.random()} img={food.img} item={food.item} price={food.price} offer={food.offer} ></Food>
  )
 }
 )
}
    
    </div>
   
  </div>
   
  )

}
export default Body;