import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn"
import Repositories from "../pages/Repositories";
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/repositories" element={<Repositories />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
