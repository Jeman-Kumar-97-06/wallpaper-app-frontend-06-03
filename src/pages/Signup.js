import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {signup,error,isloading} = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(name,email,password);
    }

    return (
        <form className="signup_div" onSubmit={handleSignup}>
            <h1>Signup:</h1>
            <label>Name:</label>
            <input type='name' onChange={e=>{setName(e.target.value)}} value={name}/>
            <label>Email:</label>
            <input type='email' onChange={e=>{setEmail(e.target.value)}} value={email}/>
            <label>Password:</label>
            <input type='password' onChange={e=>{setPassword(e.target.value)}} value={password}/>
            <button type="submit" display={isloading}>Signup</button>
            {!isloading || <div>Please wait. The server response is slow.😿</div>}
            {error && <div>{error}</div>}
        </form>
    )
}

export default Signup;