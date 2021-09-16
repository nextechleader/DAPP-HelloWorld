const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld',()=>{
  it('Tendria que retornar Hello World Nextechleaders', async ()=>{
    const helloworld = await HelloWorld.deployed();
    const result = await helloworld.hello();
    assert(result==='Hello World NexTechLeaders');
  });
});
