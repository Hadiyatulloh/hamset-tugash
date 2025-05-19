import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [energy, setEnergy] = useState(6500);
  const hamsterBtnRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prev => (prev < 6500 ? prev + 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function addCoin() {
    if (energy > 0) {
      setEnergy(prev => prev - 1);
      setCount(prev => prev + 1);

      hamsterBtnRef.current.classList.add('clicked');
      setTimeout(() => {
        hamsterBtnRef.current.classList.remove('clicked');
      }, 100);
    }
  }

  return (
    <div className='main'>
      <div className="box">
        <h2 className='title'>Hamster Kombat</h2>

        <div className="header">
          <div className="header-box">
            <h3>Earn per tap</h3>
            <div>
              <img src="./coin.png" alt="coin" /> <span>+12</span>
            </div>
          </div>
          <div className="header-box">
            <h3>Coins to level up</h3>
            <div>
              <img src="./coin.png" alt="coin" /> <span>+12</span>
            </div>
          </div>
          <div className="header-box">
            <h3>Profit per hour</h3>
            <div>
              <img src="./coin.png" alt="coin" /> <span>+1</span>
            </div>
          </div>
        </div>

        <div className="hamster-main">
          <h1>
            <img src="./coin2.png" alt="coin" /> {count}
          </h1>
          <button ref={hamsterBtnRef} onClick={addCoin} className='hamster-btn'>
            <img id='hamster' src="./hamster.png" alt="hamster" />
          </button>
        </div>

        <footer>
          <p>⚡<span>{energy}</span>/6500</p>
          <img className='img' src="Group 11.png" alt="" />
        </footer>
      </div>
    </div>
  )
}

export default App;
