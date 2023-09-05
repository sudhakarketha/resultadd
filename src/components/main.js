import React from 'react';
import Results from './Results';
import Summary from './Summary';

import'./Main.css';

const main = () => {
  return (
    <div className='body'>
        <div className='main'>
        <div className='rside'>
            <Results/>
        </div>
        <div className='lside'>
            <Summary/>
        </div>
        </div>
       
    </div>
  )
}

export default main