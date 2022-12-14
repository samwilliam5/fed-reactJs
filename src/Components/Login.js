

import './login.css';
import { useState,useEffect } from 'react';
import images from './images/Food-Wallpapers-HD-For-Desktop.jpg'

import {useNavigate} from 'react-router-dom';

function Login(props){
    var navi=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isvalid,setValid]=useState(false);

    const login=(a)=>{
        a.preventDefault();
        localStorage.setItem("login",true);
        props.isLoggedin(true);
        navi('/header/logout')
    }

    useEffect(() => {
        fetch('https://63146fb1fc9dc45cb4ed743a.mockapi.io/api/login').then((response)=>{
            if(response.ok){
                return response.json();
            } 
            return false;
        }).then((response)=>{
            if(response){
                props.isLoggedin(false);
            }
        })
    },[props]);

    useEffect(()=>{
        if((email.includes('@') && password.length > 5)){
            setValid(true);
        }

},[email,password]);

    useEffect(()=>{
        return ()=> console.log('login is unmounted');   
},[]);

const emailHandler=(a)=>{
    setEmail(a.target.value)
}
const passwordHandler=(a)=>{
    setPassword(a.target.value)
}


return(
    <div>
        <div className='foodback'>
        <img src={images} alt="This is food image"  />
        </div>
        <fieldset  className='FieldLogin'>
            <legend>Welcome!</legend>
    <form className='formlogin' onSubmit={login}>
          
        <label style={labelstyle}>USERNAME:</label>
        <input type="email" placeholder="Enter Email or Username" onChange={emailHandler} value={email} required/><br />
        <label style={labelstyle}>PASSWORD:</label>
        <input type="password" placeholder="Enter Password" onChange={passwordHandler} value={password} required/><br /><br />
        {isvalid?  <button type="submit" className='loginbtn' >Login</button>:  <button type="submit" disabled>Login</button>}
        
    </form>
    </fieldset>
    </div>

);
}

const labelstyle={
    color:'purple'
}

export default Login;


// import { Component } from 'react';
// import './login.css';




// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             isValid: ""
//         };
//         this.emailHandler= this.emailHandler.bind(this);
//     }

//     login(e) {
//         e.preventDefault();
//         localStorage.setItem('login', true)
//         this.props.isLoggedin(true);
//     }

//     componentDidMount() {
//         console.log('Food component mounted')
//         fetch('https://63146fb1fc9dc45cb4ed743a.mockapi.io/api/login').then((response) => {

//             if (response.ok) {
//                 return response.json()
//             }
//             return false;
//         }).then((response) => {
//             if (response) {
//                 this.props.isLoggedin(true);
//             }
//         })
//     }

//     componentDidUpdate(previousProps, previousState) {
//         console.log('updated')
//         if (previousState.isValid !== true) {
//             if ((this.state.email.includes('@') && this.state.password.length > 4)) {
//                 this.setState((previouseState) => {
//                     return { ...previouseState, isValid: true }
//                 })
//             }
//         }


//     }

//     componentWillUnmount() {
//        console.log('login component unmounted');
//     }


//     emailHandler(e) {
//         this.setState((previouseState) => {
//             return { ...previouseState, email: e.target.value }
//         })
//     }
//     passwordHandler(e) {
//         this.setState((previouseState) => {
//             return { ...previouseState, password: e.target.value }
//         })
//     }

//     render() {
//         console.log('component rendered')
//         return (

//             <form className='formlogin' onSubmit={this.login.bind(this)}>
//                 <label >Username:</label>
//                 <input type="email" placeholder="Enter email" onChange={this.emailHandler} value={this.state.email} /><br />
//                 <label >Password:  </label>
//                 <input type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)} value={this.state.password} /><br /><br />
//                 {this.state.isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}

//             </form>

//         );
//     }
// }

// export default Login;
