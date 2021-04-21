import React,{useState} from 'react'
import './Form.css';


const Form = () => {
    const [inputField , setInputField] = useState({
        first: '',
        gmail: ''
    })


    const {first, gmail} = inputField;

    const inputsHandler = (e) =>{
        setInputField( { ...inputField, [e.target.name]: e.target.value })
    }

    const handleFinalSubmit = e => {
        e.preventDefault(); 
        console.log(inputField);
      };
    return (
        <>
                    <div className="form">
                    <h3>Subscribe to receive updates on new posts</h3>
                    <p>Both fields are required.</p>
                    <form onSubmit={handleFinalSubmit} >
                        <div>
                            <input id='email'
                                    placeholder='Email' 
                                    name='gmail'
                                    value={gmail}
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
                        <button  type='submit'>Subscribe</button>
                    </form>
                </div>
        </>
    )
}

export default Form
