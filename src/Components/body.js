import './body.css'
import Food from './food';
import image from './images/pizza.jpg'
import chicken from './images/chicken65.jpg'
import briyani from './images/briyani.jpg'
import shawarma from './images/shawarma.jpg'
import Form from'./form';
import { useState } from 'react';
import Login from './Login';



function Body() {
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
  const[isLoggedin,setLoggedIn]=useState(false);

  const loginHandler=(islogin)=>{
    setLoggedIn(islogin);
  }
 
   
  // const[isLoggedin,setLoggedIn]=useState(false);
//   const[email,setEmail]=useState('');
//   const[password,setpassword]=useState('');
//   const[isvalid,setvalid]=useState(false)
//   const login=()=>{
//     setLoggedIn(true)
//     localStorage.setItem('login',true)
//   }
//   useEffect(()=>{
//     console.log('mounted');
//     setLoggedIn(localStorage.getItem('login'));
//     if((email.includes('@') && password.length>4)){
//       setvalid(true);
//     }
//     return()=>{
//       console.log('component unmounted');
//     }
//    },[email,password]);//mount ana matu empty//[email,password]-dependency
 
//   const emailHandler=(e)=>{
// setEmail(e.target.value)
//   }
//  const passwordHandler=(e)=>{
// setpassword(e.target.value)
    
//   }
    return (<div >
      {isLoggedin ? <Form add={updateFoods} ></Form> :<Login isLoggedin={loginHandler}></Login>  }
       {/* <form onSubmit={login}>
           <input type="email" placeholder='Enter email' onChange={emailHandler} value={email}/><br />
        <input type="password" placeholder='Enter password' onChange={passwordHandler} value={password}/><br />
          { isvalid ? <button type='submit'>Submit</button> :<button type='submit' disabled>Submit</button>}
          
       </form> */}

      
{/* <Form add={updateFoods}></Form> */}
    <div className='food'>
    
      
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