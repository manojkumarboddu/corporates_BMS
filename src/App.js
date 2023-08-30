import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Stream from "./Stream/Stream";
import Boddy from "./boddy/boddy";
import Worldcup from "./Worldcup/Worldcup";
import ListYourShow from "./ListYourShow/ListYourShow";
import Events from "./Events/Events";
import Sports from "./Sports/Sports";
import Activities from "./Activities/Activities";
import BuzzItem from "./Buzz/BuzzItem";
import Corporatesbody from "./Corporates/Corporatesbody";
import Offers from "./Offers/Offers";
import Giftcards from "./Giftcards/Giftcards";
//import Corporatesbody from "./Corporates/Corporatesbody";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/offers" element={<Offers></Offers>}></Route>
          <Route path="/gifts" element={<Giftcards></Giftcards>}></Route>
          <Route
            path="/corporates"
            element={<Corporatesbody></Corporatesbody>}
          ></Route>

          <Route path="/sports" element={<Sports></Sports>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/activities" element={<Activities></Activities>}></Route>
          <Route path="/buzz" element={<BuzzItem></BuzzItem>}></Route>
          <Route path="/" element={<Boddy></Boddy>}></Route>
          <Route path="/worldcup" element={<Worldcup></Worldcup>}></Route>
          <Route
            path="/listyourshow"
            element={<ListYourShow></ListYourShow>}
          ></Route>
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
