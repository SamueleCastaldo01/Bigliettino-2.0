import React, {useEffect} from 'react';
import './App.css';
import immagine from './nice.gif'
import rose from './rose.png'
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import { motion } from 'framer-motion';

function App() {
  const [checked, setChecked] = React.useState(false);

  const [flagMessaggio, setFlagMessaggio] = React.useState(false);

const handleMessaggio = () => {
  setChecked(false)
  setFlagMessaggio(true)
}  

  React.useEffect(() => {
    setTimeout(() => {
      setChecked(true)
    }, 500); // Imposta il ritardo desiderato in millisecondi
  }, []);

  return (
    <div className="container">

    <h1 style={{ paddingTop: "120px", color: "white" }}> Per .... <span><img src={rose} style={{ width: "30px" }}/></span>🤍</h1>
    
      <img src={immagine}  alt="logo" />
 
        {/* Conditionally applies the timeout prop to change the entry speed. */}

    {checked &&
    <motion.div
    style={{ paddingTop: "50px" }}
    onClick={handleMessaggio}
       initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      >
         <img src={rose} style={{ width: "200px" }}/>
      </motion.div>
    }

  {flagMessaggio && 
    <Fade in={flagMessaggio} timeout={2000}>
    <h4 style={{ color: "white", paddingTop: "50px", paddingLeft: "17px", paddingRight: "17px" }}>
    Tra le spine delle mie giornate, sei fiorita nella mia vita come una rosa. In ogni petalo, vedo riflessa la tua dolcezza e la tua gentilezza e come i petali abbracciano la rosa, così hai fatto con me ne momenti difficili, un sincero grazie per essere la rosa più preziosa del mio giardino, ti voglio un bene che non riesco ad esprimere 🤍
    </h4>
    </Fade>
  }


    </div>
  );
}

export default App;
