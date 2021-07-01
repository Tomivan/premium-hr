import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './add-company.css';

const AddCompany = () => {
    const {handleSubmit, handleChange, register, errors } = useForm([]);
    const { name, setName } = useState({});
    const { email, setEmail } = useState({});
    function inviteCompany() {
        console.log("here") 
        fetch('https://hr-backend-test.herokuapp.com/add-company', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                "name": "Mic",
                "token": "ggsshhhsdgd",
                "email": "hshhs@email.com"
                })
            })
                   .then(response => response.json())
            .then(data =>{
                console.log('yres', data)
            });
    }
    useEffect(() => {
        setName(name);
        setEmail(email);
    }, [name, email]);
    return (
        <>
        <div className="add-company-card">
            <h2 className="add-company-heading"> Add Company</h2>
            <form className="add-company-form" onSubmit={() =>{handleSubmit(inviteCompany())}}>
                <label className="label"> Company Name</label>
                <input type="text" className="input" value={name} onChange={handleChange}
                {...register("name", {required: true})}/>
                {errors.name && errors.name.message}
                <label className="label"> Email Address</label>
                <input type="text"
                className="input" 
                placeholder="example@gmail.com" 
                value={email} 
                onChange={handleChange}
                {...register( "email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i},
                {message: "invalid email address" })}/>
                 {errors.email && errors.email.message}
                 <button className="invite" type="submit">Invite Company</button>
            </form>
        </div>
        </>
    )
}

export default AddCompany;