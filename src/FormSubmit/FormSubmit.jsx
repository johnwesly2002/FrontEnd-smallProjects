import React,{useState} from 'react';

const FormSubmit = () => {
    const[formData, setFormData] = useState({
        username: '',
        fullName:'',
        age:''
    });
    const [userData, setUserData] = useState([]);
    const[erros,setErrors] = useState({
        username: false,
        fullName: false,
        age: false
    })

    const handleChange = (e) => {
        setFormData((prev) => {
            return {...prev,[e.target.name] : e.target.value};
        });
        setErrors((pre) => {
            return {...pre, [e.target.name] : false}
        })
        console.log(formData)
    }

    const handleSubmit = () => {
        if(formData.username.length <= 1){
            setErrors((prev) => ({...prev, username: true}));
            return;
        }
        setUserData((prev) => [...prev, formData]);
        setFormData({
            username:'',
            fullName:'',
            age:''
        })
        console.log(userData);
    }
    return (
        <div> 
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap:'10px'}}>  
            <input type='text' placeholder='Enter username' name='username' value={formData.username} onChange={(e) => handleChange(e)} />
            {erros.username ? <span style={{color:'red'}}>Enter Vaild Username</span> : null}
            <input type='text' placeholder='Enter fullName' name='fullName' value={formData.fullName} onChange={(e) => handleChange(e)}  />
            <input type='text' placeholder='Enter age' name='age' value={formData.age} onChange={(e) => handleChange(e)}  />
            <button style={{backgroundColor: 'black', color: 'white' , width: '20%'}} onClick={handleSubmit}>Submit</button>
            </div>
            <ul>
            {userData.map((itm,index) => (
                <li key={index}>{itm.username}</li>
            ))}
            </ul>
        </div>
    );
}

export default FormSubmit;
