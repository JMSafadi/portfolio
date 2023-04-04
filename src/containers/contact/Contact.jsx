import React, { useState } from 'react';
import '../../styles/containers/_contact.scss'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPhoneLine, RiTwitterFill } from 'react-icons/ri'
import UpBtn from '../../components/UpBtn';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { BounceLoader } from 'react-spinners';

const Contact = () => {

    const [submitting, setSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault()
        setSubmitting(true)
        emailjs.sendForm('service_3mqq70d', 'template_x3u31b9', e.target, 'hJgDsIzvj6sFsRMki')
        .then(response => swal({
            title: 'Email sent successfully!',
            text: 'You will recive my response as soon as posible',
            icon: 'success',
            button: 'Accept'
        }))
        .then(response => setSubmitting(false))
        .catch(error => swal({
            title: 'The email could not be sent.',
            text: error,
            icon: 'error',
            button: 'Accept'
        }))
    }

    return (
        <div className='contact__section section__margin' id='contact'>
            <div className='contact__info'>
                <div className='title__detail'></div>
                <h2 className='contact__title'>Contact</h2>
                <div className='contact__email'>
                    <RiMailLine/>
                    <p>julianmatiassafadi@hotmail.com</p>
                </div>
                <div className='contact__phone'>
                    <RiPhoneLine/>
                    <p>+54 9 11 2461-1357</p>
                </div>
            </div>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/juliansafadi/' target='_blank'><RiLinkedinBoxFill color='white' size={25} type='button' className='btn__linkedin'></RiLinkedinBoxFill></a>
                <a href='https://github.com/JMSafadi' target='_blank'><RiGithubFill color='white' size={25} type='button' className='btn__github'>Gith</RiGithubFill></a>
                <a href='https://twitter.com/jumasa0' target='_blank'><RiTwitterFill color='white' size={25} type='button' className='btn__twitter'>Twitter</RiTwitterFill></a>
            </div>
            <div className='contact__form__container'>
                <form className='contact__form' onSubmit={sendEmail}>

                    <input type='text'
                     name='user_name'
                     placeholder='Name' 
                     className='input__name'
                     />

                    <input type='text'
                     name='user_email'
                     placeholder='Email' 
                     className='input__mail'
                     />

                    <textarea type='text'
                     name='user_message'
                     placeholder='Message'
                     className='input__message'
                     />

                    <button type='submit' className='btn__submit'>
                        {submitting 
                            ? 
                                <>
                                <p>Sending...</p>
                                <BounceLoader color='#fff' size={25}></BounceLoader>
                                </>
                            :   'Send'
                        }
                    </button>
                </form>
            </div>
        <UpBtn/>
        </div>
    );
}

export default Contact;
