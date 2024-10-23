import React from 'react'
import FooterLine from '../../assets/FooterLine.png'

const Contacts = () => {
    return (
        <div className='contactsSection' id='Contacts'>
            <h2 className='title'>
                04. What's Next <span> </span>
                <img src={FooterLine} alt='Line' style={{ width: '250px' }} className='titleLine' />
                </h2>
            <h1 className='contactMe'>Get In Touch</h1>
            <div>
                <p>
                    My inbox is always open. Whether you have a question or just want to <br /> say hello,
                    I'll try my best to get back to you! Feel free to mail me about <br /> any relevant job updates.
                </p>
            </div>
            <div>
                <a href='mailto: wairimugitungu@gmail.com'>
                    <button className='mailButton'>
                        Mail Me
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Contacts;