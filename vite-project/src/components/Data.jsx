import React from 'react'
import quadra from './Group2.png'
import Btn from './Btn'

function Data() {
    const arr = [
        {
            id: '1',
            title: ' Know your runs. In and out.',
            text: '   Train smarter with more in-run stats. Want to compare a run to your last five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation.',
            img: quadra,

        },
        {
            id: '2',
            title: ' Know your runs. In and out.',
            text: '   Train smarter with more in-run stats. Want to compare a run to your last five? Just swipe left. Mark splits by selecting pause or using gestures, like tapping the screen or double-clicking the side button. And get a full post-run report, including elevation.',
            img: quadra,
        },
        {
            id: '3',
            title: ' Know your runs. In and out.',
            text: 'Run every Sunday and see how long you can keep your streak alive. Fuel your run with exclusive Nike+ Run Club playlists on Apple Music.',
            link:<Btn>Learn more</Btn>,

        },
    ]
    return (
        <div>

            <div className="cards">
            {
                arr.map((item , index )=>{
                    return (
                            <div key={item.id} className="card">
                                <h2 className="card__title">
                                {item.title}
                                </h2>
                                <p className="card__text">
                                    {item.text}
                                </p>
                               {item.img ?  <img className='card__img' src={item.img} /> : null}
                               {item.link ? item.link : null}


                            </div>
                            )
                        })
                    }
                    </div>




        </div>
    )
}

export default Data