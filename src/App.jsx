import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './assets/components/Home/Home';
import Header from './assets/components/Header/Header';
import SideCart from './assets/components/SideCart/SideCart';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [watchTime, setWatchTime] = useState('');


  // handle watch time
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if(previousWatchTime){
      const totalTime = previousWatchTime + time;
      localStorage.setItem('watchTime', totalTime);
      setWatchTime(totalTime);
      // console.log(totalTime);
    }
    else{
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    }
    // console.log(previousWatchTime);
  };

  return (
    <div className='text-center container'>
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>

        </div>
        <div className="side-cart col-md-4 card mb-5 bg-light">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>


      {/* <Contact></Contact> */}
      <ToastContainer></ToastContainer>

      
    </div>
  );
}

export default App;
