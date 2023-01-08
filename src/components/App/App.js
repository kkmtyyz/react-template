import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/react-template">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-4">
              Column1
            </div>
            <div className="col-lg-2 col-4">
              Column2
            </div>
            <div className="col-lg-2 col-4">
              Column3
            </div>
            <div className="col-lg-2 col-4">
              Column4
            </div>
            <div className="col-lg-2 col-4">
              Column5
            </div>
            <div className="col-lg-2 col-4">
              Column6
            </div>
            <div className="col-lg-2 col-4">
              Column7
            </div>
            <div className="col-lg-2 col-4">
              Column8
            </div>
            <div className="col-lg-2 col-4">
              Column9
            </div>
          </div>
        </div>
  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
