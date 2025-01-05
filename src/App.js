import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Form from "./views/Form";

import Alive from "./Alive";
import Transfer from "./Alive/Transfer";


function App() {
  // debugger;
  console.log("App ..");

  const AliveHome = Transfer(Home, 'home');
  const AliveForm = Transfer(Form, 'form');

  return (
    <BrowserRouter>
      <Alive>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/form'}>Form</Link></li>
          </ul>

          <div>
            <Routes>

              <Route path="/" element={<AliveHome />} />
              <Route path="/form" element={<AliveForm />} />
            </Routes>
          </div>

        </div>
      </Alive>
    </BrowserRouter>

  );
}

export default App;
