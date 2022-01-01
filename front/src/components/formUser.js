import useInput  from "../logic/useInput";
import NormalInput from "./inputs";
import "../styles/forms.css";
import { useState } from "react";


const FormUser  = () => {

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [typeUser, setType] = useInput("buyers");
    const [stateRegister, setStReg] = useState("beginning");

    const enviarDatos = async (e) => {

        e.preventDefault();

        const sended = {
            name: name,
            email: email,
            password: password 
        };

        const packagePosted = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify(sended)
        }

        fetch("http://localhost:4200/" + typeUser , packagePosted)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }


    const enviarCodigoAuth = async (e) => {
        e.preventDefault();
        
        const packagePosted = {
            method: "POST",
            headers: {"Content-type": "application/json", "charset":"utf-8"},
            body: JSON.stringify({email: email})
        }

        fetch("http://localhost:4200/" + typeUser + "/authentificate", packagePosted)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
    }

    if(stateRegister === "beginning") 
    {
        return(
            <form className="flexcenter formd"onSubmit={enviarCodigoAuth} > 


                <p> Name </p>
                <NormalInput value={name} onChange={setName} />

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
                <button> Send </button>
            </form>
        );
    }
};

export default FormUser;
