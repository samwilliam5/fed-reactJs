import logo from './logo.svg';
import './App.css';
import Head from './Components/head';
import Body from './Components/body';
import image from'./Components/images/pizza.jpg'
import chicken from './Components/images/chicken65.jpg'
import briyani from './Components/images/briyani.jpg'
import shawarma from './Components/images/shawarma.jpg'
function App() {
  var foods=[
      {img:image,
        name:'Pizza',
      price:200,
      offer:10
    },
    {img:briyani,
      name:'Briyani',
    price:150,
    offer:30
  },
  {img:shawarma,
    name:'Shawarma',
  price: 100,
  offer:40
},
{img:chicken,
  name:'Chicken 65',
price: 120,
offer:25
}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Head></Head>
        <Body food={foods}></Body>
        
      </header>
    </div>
  );
}

export default App;
