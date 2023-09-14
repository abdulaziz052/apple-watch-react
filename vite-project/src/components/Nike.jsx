import React from 'react'
import nike from './watch-in-hand.png'
function Nike() {
  return (
    <div>
          <section class="nike">
            <div class="container nike__container">
                <div class="nike__info">
                    <h2 class="nike__title">
                        Nike Sport Band.
                        Light. Flexible.
                        Breathable.
                    </h2>
                   <div class="hero__info__two">
                    <div class="line active"></div>
                    <p class="nike__text">
                        Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.
                    </p>
                   </div>
                    <a href="#" class="main-link">
                        Buy now
                    </a>
                </div>
                <img src={nike} alt="nike__img" class="nike__img"/>
            </div>
        </section>
    </div>
  )
}

export default Nike