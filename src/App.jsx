import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn"
import Repositories from "../pages/Repositories";
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/repositories" element={<Repositories />}/>
          <Route path="/" element={<SignIn />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
