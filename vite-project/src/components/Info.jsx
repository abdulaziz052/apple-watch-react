import Re  from 'react'
import Btns from './Btns'

function Info({title , text , link , title1 ,text1 ,link1 , title2 , text2, link2}) {
  return (
    <>
      <div className="hero__info">
        <h1 className="hero__info__title">
          {title} {title1} {title2}
        </h1>
        <div className="hero__info__two">
        
          <p className="hero__info__text">
            {text}{text1}{text2}
          </p>
        </div>
        <Btns>{link}{link1}{link2}</Btns>

      </div>
      </>
   
  )
}

export default Info