import './Header.css'
import briyani from "./images/briyani.jpg";
import pizza from "./images/pizza.jpg";
import shawarma from "./images/shawarma.jpg";

function Header(props) {
  const main=[

    {name:'Briyani',
    rate:'Rs 200',
    click:'Buy',
  },
    {name:'Pizza',
    rate:'Rs 250',
    click:'Buy',
    },
    {name:'Shawarma',
    rate:'Rs 100',
    click:'Buy',
    }
  ];
  const header='SWIGGY';
  const signin='Sign IN';
  //return one elment with childes
  return (<div className='Header-container'>
    <div className='head'>
      <h1>{header}</h1>
    <a href="#"><button>{signin}</button></a>
    </div>
    <div className='main'>
      <div className='briyani'>
        <img src={briyani} alt="briyani" width={150} />
      <p>{main[0].name}</p>
      <p>{main[0].rate}</p>
      <p>{main[0].click}</p>
      </div>
      <div className='pizza'>
      <img src={pizza} alt="briyani" width={150} />
      <p>{main[1].name}</p>
      <p>{main[1].rate}</p>
      <p>{main[1].click}</p>
      </div>
      <div className='shawarma'>
      <img src={shawarma} alt="briyani" width={150} />
      <p>{main[2].name}</p>
      <p>{main[2].rate}</p>
      <p>{main[2].click}</p>
      </div>
    </div>

  </div>);
}
export default Header;



// import './Header.css'
// import briyani from "./images/briyani.jpg";
// import pizza from "./images/pizza.jpg";
// import shawarma from "./images/shawarma.jpg";
// import HeaderItem from 'Components/Header/Headeritem';
// function Header(props) {
//   const main=[

//     {name:'Briyani',
//     rate:'Rs 200',
//     click:'Buy',
//   },
//     {name:'Pizza',
//     rate:'Rs 250',
//     click:'Buy',
//     },
//     {name:'Shawarma',
//     rate:'Rs 100',
//     click:'Buy',
//     }
//   ];
//   const header='SWIGGY';
//   const signin='Sign IN';
//   //return one elment with childes
//   return (<div className='Header-container'>
//     <div className='head'>
//       <h1>{header}</h1>
//     <a href="#"><button>{signin}</button></a>
//     </div>
//     <div className='main'>
//       <div className='briyani'>
//         <img src={briyani} alt="briyani" width={150} />
//       <p>{main[0].name}</p>
//       <p>{main[0].rate}</p>
//       <p>{main[0].click}</p>
//       </div>
//       <div className='pizza'>
//       <img src={pizza} alt="briyani" width={150} />
//       <p>{main[1].name}</p>
//       <p>{main[1].rate}</p>
//       <p>{main[1].click}</p>
//       </div>
//       <div className='shawarma'>
//       <img src={shawarma} alt="briyani" width={150} />
//       <p>{main[2].name}</p>
//       <p>{main[2].rate}</p>
//       <p>{main[2].click}</p>
//       </div>
//     </div>

//   </div>);
// }
// export default Header;



