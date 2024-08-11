import React from "react";
import { useState } from "react";
// import Navigation from "../component/Navigation/Navigation";
import {auth, app} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import {useNavigate} from "react-router-dom";

const SignUp = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate('');

    const signup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
    }
    return (
        <>
            {/* <Navigation /> */}
            <div className="container-signin">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Đăng nhập<strong></strong></h1>
                        <p className="text text-normal">
                            Đã có tài khoản?
                            <span>
                                <a href="/login" className="text text-links">
                                    Đăng nhập
                                </a>
                            </span>
                        </p>
                    </div>

                    <form onSubmit={signup}>
                        <div className="input-control">
                            <input type="email" placeholder="Nhập địa chỉ email" className="input-field" onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="input-control">
                            <input type="password" placeholder="Nhập mật khẩu" className="input-field" onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <button type="submit" name="submit" className="input-submit" value="Sign in" >Đăng ký</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default SignUp;