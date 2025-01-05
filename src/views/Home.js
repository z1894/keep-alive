import { useState } from "react"

function Home() {
    console.log("渲染 Home ..")
    const [title, setTitle] = useState('Home');

    return (
        <div>
            <h1>1.{title}</h1>
            <button onClick={() => setTitle('首页')}>SET</button>
        </div>
    );
}
export default Home