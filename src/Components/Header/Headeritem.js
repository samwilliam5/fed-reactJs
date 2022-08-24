function Headeritem(props) {
    return(<div>
<div className="item">{props.name}</div>
<div className="item">{props.rate}</div>
<div className="item">{props.click}</div>


    </div>);
}
    
    
//     (<div className='Header-container'>
    
//      {<div className='head'>
//       <h1>{header}</h1>
//     <a href="#"><button>{signin}</button></a>
//     </div>
//     <div className='main'>
//       <div className='briyani'>
//         <img src={briyani} alt="briyani" width={150} />
//       <p>{props[0].name}</p>
//       <p>{props[0].rate}</p>
//       <p>{props[0].click}</p>
//       </div>
//       <div className='pizza'>
//       <img src={pizza} alt="briyani" width={150} />
//       <p>{props[1].name}</p>
//       <p>{props[1].rate}</p>
//       <p>{props[1].click}</p>
//       </div>
//       <div className='shawarma'>
//       <img src={shawarma} alt="briyani" width={150} />
//       <p>{props[2].name}</p>
//       <p>{props[2].rate}</p>
//       <p>{props[2].click}</p>
//       </div>
//     </div>

//   </div>); 
// }
export default Headeritem;
