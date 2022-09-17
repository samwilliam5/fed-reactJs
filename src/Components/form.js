import React, { useState } from "react";
import './form.css';

function Form(props) {

    const [addedform, setForm] = useState({
        restaurant: '',
        variety: '',
        offer: '',
        price: '',
        ratings: '',
        
    });

    const resHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, restaurant: event.target.value }
        });
    }
    const varHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, variety: event.target.value }
        });
    }
    const offHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, offer: event.target.value }
        });
    }
    const priHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, price: event.target.value }
        });
    }
    const ratHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, ratings: event.target.value }
        });
    }
    const foodHandler = (event) => {
        setForm((previousform) => {
            return { ...previousform, food: event.target.value }
        });
    }

    const subjectHandler = (a) => {
        a.preventDefault();
        // const addedform = { ...form, id: Math.random().toString() }
        props.onFormAdded(addedform);
        setForm({
            restaurant: '',
            variety: '',
            offer: '',
            price: '',
            ratings: '',
            
        })
    }

    return (
        <div className="form">
            <h3>Add New Food</h3>
            <form type='login' className="addNewfood" onSubmit={subjectHandler}>
                <fieldset>
                    <legend></legend>
                <input type="text" placeholder="Restaurant Name"  onChange={resHandler} value={addedform.restaurant}></input><br />
                <input type="text" placeholder="Variety"  onChange={varHandler} value={addedform.variety}></input><br />
                <input type="number" placeholder="Offers"  onChange={offHandler} value={addedform.offer}></input><br />
                <input type="number" placeholder="Price" onChange={priHandler} value={addedform.price}></input><br />
                <input type="number" placeholder="Ratings"  onChange={ratHandler} value={addedform.ratings}></input><br />
                <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Form;