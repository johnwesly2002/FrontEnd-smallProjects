import React, {useState, alert } from 'react';

const BasicForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false
    })
    const handleSubmit = () => {
        if(formData.username.length <= 1){
            setErrors((prev) => ({...prev, username: true}));
        }
        if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(formData.email)) {
            setErrors((prev) => ({ ...prev, email: true }));
        } 
        if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/).test(formData.password)){
           setErrors((prev) => ({ ...prev, password: true })); 
        }

        if(formData.username.length <= 1 && (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(formData.email) && (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/).test(formData.password)){
            alert("Submitted Succesfully");
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))

        setErrors((prev) => ({
            ...prev,
            [e.target.name] : false
        }))
    }

    return (
       <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center',alignItems: 'center', gap: '20px'}}>
        <input type='text' name='username' style={{width:'500px', height: 30}}  placeholder='Enter Username' onChange={handleChange} />
        { errors.username && <span style={{color: 'red'}}>Username is Required and provide correct username</span>}
        <input type='text' name='email' style={{width:'500px', height: 30}}  placeholder='Enter Email' onChange={handleChange} />
        { errors.email && <span style={{color: 'red'}}>email is Required</span>}
        <input type='password' name='password' style={{width:'500px', height: 30}}  placeholder='Password' onChange={handleChange} />
        { errors.password && <span style={{color: 'red'}}>password is Required</span>}
        <button type='submit'  style={{width:'500px',height: 30,backgroundColor: 'black', color: 'white'}} onClick={() => handleSubmit()} >Submit</button>
       </div>
    );
}



export default BasicForm;