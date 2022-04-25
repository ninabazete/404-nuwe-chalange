import './App.css';
import Logo from './components/img/img-404.png';
import './components/style/image.css';
import Button from './components/Buttons';

function App() {
  return (
   <div className="App"> 

     <div className='container-text'>
      <img 
       src={Logo}
       className='img-404'
       alt='imagem 404' />

      <h1>OOPS!</h1>
      <p>Page not found</p>
     </div> 

     <div className='container-button'> 

      <Button onClick={() => {alert('Deseas volver a la home page?')}}
       type='button'>
         Go Home
      </Button>
      <Button onClick={() => {alert('Deseas volver a tu perfíl?')}}
       type='button'>
          Go Back
      </Button> 

     </div>
     
   </div>
  );
}

export default App;
