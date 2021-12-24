import useInput  from "../../logic/useInput";


const SellerForm = () => {

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

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

        fetch("http://localhost:4200/sellers", packagePosted)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return(
        <form onSubmit={enviar} > 
            <p> Name </p>
            <input value={name} onChange={setName} />

            <p> Email </p>
            <input type="mail" value={email} onChange={setEmail} />

            <p>password</p>
            <input type="password" value={password} onChange={setPassword} />

            <button> Send </button>
        </form>
    );
};

export default SellerForm;
