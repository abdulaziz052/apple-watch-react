import React from 'react'

function Btn({children}) {
  return (
    <div>
                  <div class="card__info">
                    <div class="card__line">
    
                    </div>
                    <button class="card__btn">
                        {children}
                    </button>
                   </div>
    </div>
  )
}

export default Btn