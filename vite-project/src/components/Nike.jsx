import React from 'react'
import nike from './watch-in-hand.png'
import Info from './Info'
function Nike() {
    const nikeinfo ={
        title1:`Nike Sport Band.
        Light. Flexible.
        Breathable.`,
        text1:`Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.`,
        link1:`Buy now`
    }
  return (
    <div>
          <section class="nike">
            <div class="container nike__container">
               <Info title1={nikeinfo.title1} text1={nikeinfo.text1} link1={nikeinfo.link1}/>
                <img src={nike} alt="nike__img" class="nike__img"/>
            </div>
        </section>
    </div>
  )
}

export default Nike