import React, {useState, useEffect} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Form.css';


const Form = ({status, message, onValidated}) => {
    const [inputField , setInputField] = useState({
        first: '',
        email: ''
    })

    useEffect(() => {
        Aos.init ({duration: 1000});
    }, [])

    const {first, email} = inputField;

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        email &&
        first &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            FNAME: first
        });
    }

    const inputsHandler = (e) =>{
        setInputField( { ...inputField, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if(status === 'success') {
            setInputField({
                first: '',
                email: ''
            })
        }
    }, [status])

    return (
        <>
                    <div className="form" data-aos="fade-up">
                    <h3>Subscribe to receive updates on new posts</h3>
                    <p>Both fields are required.</p>
                    {status === "success" && (
                        <div
                            className={'success-message'}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {status === "error" && (
                        <div
                            className={'error-message'}
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    <form onSubmit={handleFinalSubmit} >
                        <div>
                            <input id='email'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    type="email"
                                    onChange={inputsHandler}/>
                        </div>
                        <div>
                            <input id='text'
                                   type="text"
                                   name='first'
                                   value={first}
                                   placeholder='First Name'
                                   onChange={inputsHandler} />
                        </div>
                        {
                            (status === 'sending' || !email.length || !first.length) ? (
                                <button className={'disabled-button'} type='submit' disabled>Subscribe</button>

                            ) : (
                                <button type='submit'>Subscribe</button>
                            )
                        }
                    </form>
                </div>
        </>
    )
}

const SubscribeForm = () => {
    const url = "https://gmail.us1.list-manage.com/subscribe/post?u=c096446ceeeb13158cbec78e7&amp;id=51ada424b8";

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <Form
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    )
}

export default SubscribeForm
