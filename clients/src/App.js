import React, { useEffect, useState} from 'react';
import { getWeb3, getHelloWorld} from './utils.js';

function App() {

  ////HOOKS///
  const [web3, setWeb3]= useState(undefined);
  const [helloworld, setHelloWorld]= useState(undefined);

  useEffect(()=>{
    const init = async ()=>{
      const web3 = getWeb3();
      const gethelloworld = await getHelloWorld(web3);
      const helloWorld = await gethelloworld.methods.hello().call();
      setWeb3(web3);
      setHelloWorld(helloWorld);
    };
    init();
  },[]);
/////////

////VARIABLES NO DEFINIDAS////
if(
  typeof web3==='undefined'
  || typeof helloworld ==='undefined'
){
  ///PAGINA SI VARIABLES NO DEFINIDAS
  return(

    
  <div> <p> Loading .... </p></div>

);
}
////////

/////PAGINA/////
  return (
    <div>
      {helloworld}
    </div>
  );
}
/////


export default App;
