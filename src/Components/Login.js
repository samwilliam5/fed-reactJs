import { useState } from "react";
import { useEffect } from "react";
function Login(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isValid, setValid] = useState(false);
    
        const login = (e) => {
            e.preventDefault();
            localStorage.setItem('login', true)
            props.isLoggedin(true);
        }
    
        useEffect(() => {
            fetch('https://63146fb1fc9dc45cb4ed743a.mockapi.io/api/tod').then((response) => {
    
                if (response.ok) {
                    return response.json()
                }
                return false;
            }).then((response) => {
                if(response) {
                    props.isLoggedin(true);
                }
            })
        }, [props]);
    
        useEffect(() => {
            console.log('mounted')
    
            if ((email.includes('@') && password.length > 4)) {
                setValid(true);
            }
    
        }, [email, password]);
    
        useEffect(() => {
            return () => console.log('login component unmounted');
        }, []);
    
    
        const emailHandler = (e) => {
            setEmail(e.target.value)
        }
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        }
    
    
        return (
    
            <form onSubmit={login}>
                <label >Username:</label>
                <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} /> <br />
                <label >Password:</label>
                <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} /><br />
                {isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}
                
    
            </form>
    
        );
    }
    
    export default Login;