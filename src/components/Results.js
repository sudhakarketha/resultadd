import React from 'react'

import'./Results.css';

const Results = () => {
    return (
        <div className='results'>
            <div className='content'>
                <h2 className='results-title'>YourResult</h2>
                <div className='circle'>
                        <h2 className='score'>76</h2>
                        <span>of 100</span>
                </div>
                <h3 className='great'>Great</h3>
                <p className='great-content'>You scored higher than the 65% of the people who have taken these tests</p>
            </div>
            
        </div>
    )
}

export default Results