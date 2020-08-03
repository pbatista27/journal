import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                style={{ 
                    backgroundSize:'cover',
                    backgroundImage: 'url(http://2.bp.blogspot.com/-r_Fe-81ABgY/UTqwvuDJmkI/AAAAAAABsoo/_KgCxjVZfbU/s1600/fotos-de-playas-paradisiacas-palmeras-y-arena-junto-al-mar-azul-5.jpg)'
                 }} 
                className='journal__entry-picture'
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Representacion jdkjdk jdkjdkjd jdkjdj.
                </p>
            </div>

            <div className='journal__entry-date-box'>
                 <span>Monday</span>
                 <h4>18</h4>
            </div>
        </div>
    )
}
