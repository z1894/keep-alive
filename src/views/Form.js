import { useState } from "react"

function Form() {
    console.log("渲染 Form ..");
    // debugger;
    const [username, setUsername] = useState('');

    return (
        <div>
            <h1>2.Form</h1>
            <h1>{username}</h1>
            <input value={username} onInput={e => setUsername(e.target.value)} />

        </div>
    );
}
export default Form