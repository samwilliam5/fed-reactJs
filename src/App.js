import './App.css';
import{ useState} from 'react';
import Body from './components/body';
import Header from './components/header';
import Login from './components/login';
import {Routes,Route,Link} from 'react-router-dom'
import NotFound from './NotFound/NotFound';
import Footer from './components/Footer';

function App() {
  const [isLoggedin,setLoggedIn]=useState(false);

  const loginhandler=(islogin)=>{
    setLoggedIn(islogin);
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login isLoggedin={loginhandler}></Login>}></Route>
<Route path='/header' element={<Header></Header>}>
<Route path='body' element={<Body></Body>}></Route>
</Route>
<Route path="*" element={<NotFound />} />
<Route path='/footer' element={<Footer></Footer>}></Route>





      </Routes>
      {/* {isLoggedin? <Body logout={loginhandler}></Body>:<Login isLoggedin={loginhandler}></Login>
      } */}
    </div>
  );
}

export default App;
