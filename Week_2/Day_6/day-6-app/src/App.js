import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Demo from './components/Demo'

function App() {
  function sayHello(){
    alert('Hello');
  }
  return (
    <div className='text-center mt-5'> 

      <button onClick={sayHello} className='btn btn-primary'>
        Say Hello
      </button> 
    

    <Demo name='Noam' title = 'Student' count={0}></Demo>
    <Demo name='Noam' title = 'Student' count={0}></Demo>


    </div> 
    
  );
}

export default App;
