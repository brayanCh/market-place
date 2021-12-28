import useInput  from "../logic/useInput";
import NormalInput from "./inputs";
import { useState } from "react";
import "../styles/forms.css";


const FormLogin  = () => {

    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [typeUser, setType] = useInput("buyers");
    const [stateLogin, setStLogin] = useState("login");

    const enviar = async (e) => {

        e.preventDefault();

        const sended = {
            email: email,
            password: password 
        };

        const packagePosted = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify(sended)
        }

        fetch("http://localhost:4200/" + typeUser + "/validate" , packagePosted)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return(
        <form className="flexcenter formd"onSubmit={enviar} > 


            <p> Email </p>
            <NormalInput type="mail" value={email} onChange={setEmail} />

            <p>password</p>
            <NormalInput type="password" value={password} onChange={setPassword} />

            <p>Type of account</p>
            <select className="input-normal" value={typeUser} onChange={setType} >
                <option value="buyers"> Client </option>
                <option value="sellers"> Seller </option>
                <option value="mods"> Moderators </option>
            </select>
            <button> Login </button>
        </form>
    );
};

export default FormLogin;
