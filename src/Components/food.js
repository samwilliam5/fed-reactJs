import './food.css';
import {useState} from 'react';
import images from './images/briyani.jpg'

function Foods(props){
    const [price,setPrice]=useState(props.price);
        const clickHandler =()=>{
            let newPrice=(props.price-(props.offer/100)*props.price);
           setPrice(newPrice);
        }
    return(
        <div className='foods-container'>
            <div className='list' ><img src={images} alt="This is food image" width={246} /></div>
            <div className='list' >{props.restaurant}</div>
            <div className='list'>{props.variety}</div>
            <div className='list'>{'offer '}{props.offer}{'%'}</div>
            <div className='list'>{'$ '}{price}</div>
            <div className='list'>{'Ratings '}{props.ratings}{''}</div>
            <button onClick={clickHandler}> Buy</button>
        </div>
    );
}





export default Foods;
