import './form.css'
import { useState } from 'react';

function Form(params) {
    const [username,setUsername]=useState('');
    const [number,setNumber]=useState('');
    const userHandler=(event)=>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    const  numberHandler=(event)=>{
        console.log(event.target.value);
        setNumber(event.target.value);
    }
    const  submitHandler=(event)=>{
        console.log(username,number);
        event.preventDefault();

    }
    return(
        <div>
        <form onSubmit={submitHandler}>
            <label >Username:</label>
<input type='text' placeholder='Enter a Username' value={username} onChange={userHandler}/><br />
<label >Password:</label>
<input type='number' placeholder='Enter a number' value={number} onChange={numberHandler}/><br />
<input type='submit' />
        
        </form>
        </div>
        
    )
    
}
export default Form;