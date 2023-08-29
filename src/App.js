import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Stream from "./Stream/Stream";
import Boddy from "./boddy/boddy";
import Worldcup from "./Worldcup/Worldcup";
//import Corporatesbody from "./Corporates/Corporatesbody";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/movies"></Route>
          <Route path="/stream"></Route>
          <Route path="/events"></Route>
          <Route path="/buzz"></Route>
          <Route path="/" element={<Boddy></Boddy>}></Route>
          <Route path="/worldcup" element={<Worldcup></Worldcup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Corporatesbody></Corporatesbody>
//<Route
// path="/corporates"
//element={<Corporatesbody></Corporatesbody>}
//></Route>
