import React from 'react';

import './summary.css'

const summary = () => {
    return (
        <div>
            <div className='summary'>
                <h2 className='summary-title'>Summary</h2>
               <div className='summary-content'>
                    <div className='reaction-box'>
                       <p class="reactionPara"> <i class="fa-solid fa-bolt"></i>Reaction</p>
                        <p class="reactionParaRate">80 <span>/ 100</span></p>
                    </div>
                    <div className='memory-box'>
                        <p class="memoryPara"> <i class="fa-solid fa-circle-plus"></i>Memory</p>
                        <p class="memoryParaRate">92 <span>/ 100</span></p>
                     </div>
                    <div className='verbal-box'>
                        <p class="verbalPara"> <i class="fa-solid fa-comment"></i>Verbal</p>
                        <p class="verbalParaRate">67 <span>/ 100</span></p>
                    </div>
                     <div className='visual-box'>
                        <p class="visualnPara"> <i class="fa-solid fa-eye"></i>Visual</p>
                        <p class="visualParaRate">72 <span>/ 100</span></p>
                     </div>
                     <div>
                        <button className='btn'>Continue</button>
                     </div>
               </div>
            </div>
        </div>
    )
}

export default summary