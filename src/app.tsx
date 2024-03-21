import animationData from './assets/Neutro.json'

import Lottie from "lottie-react";
import { Smile, Calendar, Menu } from 'react-feather';

export function App() {

  return (
    <>
    <div className="mx-auto max-w-6xl my-8 px-4 flex items-center justify-between">
      <strong>diino</strong>
      <div className="flex space-x-4 items-center">
        <button>
          <Smile size={32} />
        </button>
        <button>
          <Calendar size={32} />
        </button>
        <button>
          <Menu size={32} />
        </button>
      </div>
    </div>
 
    <div className="flex justify-center items-center">
        <Lottie 
          animationData={animationData} 
          loop={true}
          style={{ width: '250px'}} // Ajuste as dimensões conforme necessário
        />
      </div>
    </>
  )
}
