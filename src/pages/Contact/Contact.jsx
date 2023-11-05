import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async (e) => 
    {
        const{ Name, Email, Subject, Message} = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail'  autoComplete='off' onChange={data}></input>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject'  autoComplete='off' onChange={data}></input>
                    <textarea name='Message' value={users.Message} placeholder='Your Message'  autoComplete='off' onChange={data}></textarea>
                    {
                        <button type='submit' onClick={senddata}>send</button>
                      
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact