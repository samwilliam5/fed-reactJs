import logo from './logo.svg';
import './App.css';
import Head from './Components/head';
import Body from './Components/body';
function App(props) {
  var foods=[
      {img:'',
        name:'Pizza',
      price:200,
    },
    {img:'',
      name:'Briyani',
    price:150,
  },
  {img:'',
    name:'Shawarma',
  price:100,
},
{img:'',
  name:'Chicken 65',
price:120,
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
