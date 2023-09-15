import React from 'react'
import Info from './Info'

function Footer() {
    const footer ={
        title2:`Take control of your health.`,
        text2:`  With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool.`,
        link2:`Explore features`
    }
  return (
    <div>
          <footer class="your">
        <div class="container your__container">
          <Info title2={footer.title2} text2={footer.text2} link2={footer.link2}/>
        
        </div>
    </footer>
    </div>
  )
}

export default Footer