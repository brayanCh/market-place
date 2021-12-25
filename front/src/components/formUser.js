import useInput  from "../logic/useInput";
import "../styles/forms.css";


const FormUser  = () => {

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [typeUser, setType] = useInput("buyers");

    const enviar = async (e) => {

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

    return(
        <form className="flexcenter formd"onSubmit={enviar} > 


            <p> Name </p>
            <input value={name} onChange={setName} />

            <p> Email </p>
            <input type="mail" value={email} onChange={setEmail} />

            <p>password</p>
            <input type="password" value={password} onChange={setPassword} />

            <p>Type of account</p>
            <select value={typeUser} onChange={setType} >
                <option value="buyers"> Client </option>
                <option value="sellers"> Seller </option>
                <option value="mods"> Moderators </option>
            </select>
            <button> Send </button>
        </form>
    );
};

export default FormUser;
