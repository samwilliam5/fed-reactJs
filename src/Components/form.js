
import { useState } from 'react';

import './form.css';


function Form(props) {
    
    const [newdatas , setDatas] = useState({
        item:'',
        price:'',
        offer:''
    })
    // const [Offhandle , setOffer] = useState('')
    // const [Rhandle , setRest] = useState('')
    // const [Phandle , setPrice] = useState('')

    const itemhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,item:event.target.value}
        })
        // setDatas({...newdatas,item:event.target.value})
    }
    const offerhandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,offer:event.target.value}
        })
        // setDatas({...newdatas,offer:event.target.value})
    }
   
    const pricehandle = (event) =>{
        setDatas((previousState)=>{
            return{...previousState,price:event.target.value}
        })
        // setDatas({...newdatas,price:event.target.value})
    }
    const submithandle = (event)=>{
        event.preventDefault();
        props.add(newdatas)
        // const addHotel={...newdatas, id: Math.random().toString}
        // console.log(newdatas);
        
    }
    

    return(
        <div>
            <div className="form-items">
                <form onSubmit={submithandle}>
                {/* <label>Restaurant name:</label>
                <input type="text" placeholder="Enter Restaurant" value={newdatas.restaurant} onChange={resthandle}></input><br/> */}
                <label>Name:</label>
                <input type="text" placeholder="Enter item" onChange={itemhandle}></input><br/>
                <label>Price:</label>
                <input type="number" placeholder="Enter price"  onChange={pricehandle}></input><br/>
                <label>Offer:</label>
                <input type="number" placeholder="Enter Offer"  onChange={offerhandle}></input><br/>
                <input type={"submit"}></input>
                </form>
            </div>
        </div>
    );
}

export default Form;



