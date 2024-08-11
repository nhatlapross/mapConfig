import React from "react";
import { useState } from "react";
// import Navigation from "../component/Navigation/Navigation";
import {auth, app} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import {useNavigate} from "react-router-dom";

const Map = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/map');
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
                        <h1 className="text text-large">Quản lý dữ liệu<strong></strong></h1>
                    </div>

                    <form onSubmit={signIn}>
                        <div className="input-control">
                            <input type="email" placeholder="Nhập địa chỉ email" className="input-field" onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="input-control">
                            <input type="password" placeholder="Nhập mật khẩu" className="input-field" onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <button type="submit" name="submit" className="input-submit" value="Sign in" >Đăng nhập</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Map;