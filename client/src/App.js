import Headers from "./components/Headers";
import {Routes,Route} from "react-router-dom";
import Bloges from "./pages/Bloges";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
    <Headers/>
    <Routes>
    
     <Route path="/blogs" element={<Bloges/>}/>

     <Route path="/login" element={<Login/>}/>
     <Route path="/logout" element={<Logout/>}/>
     
     <Route path="/register" element={<Registration/>}/>
    </Routes>
    </>
  );
}

export default App;
