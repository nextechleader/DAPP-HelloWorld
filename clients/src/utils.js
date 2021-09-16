import Web3 from 'web3';
import HelloWorld from './contracts/HelloWorld.json'


////CONEXION WEB3/////
const getWeb3 = ()=>{
  return new Web3('http://localhost:9545');
};
//////

/////CONEXION SMARTCONTRACT/////
const getHelloWorld = async web3=>{
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = HelloWorld.networks[networkId];
  return new web3.eth.Contract(
    HelloWorld.abi,
    deployedNetwork && deployedNetwork.address
  );
};
//////


export {getWeb3, getHelloWorld};
