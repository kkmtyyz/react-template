import { useState } from "react";

function Home() {
  const [inputText, setInputText] = useState("");
  const [inputRange, setInputRange] = useState("50");

  return (
    <div className="container-lg mb-5">
      <div className="row">
        <h1 className="text-center">Home</h1>
      </div>

      <div className="row mt-3">
        <label className="form-label" htmlFor="formText">text input</label>
        <input className="form-control form-control-sm"
          type="text"
          id="formText"
          onChange={(event) => setInputText(event.target.value)} />
      </div>

      <div className="row mt-3">
        <div className="input-group input-group-sm p-0">
          <span className="input-group-text" >text output</span>
          <input className="form-control form-control-sm" type="text" readOnly placeholder={inputText} />
        </div>
      </div>

      <div className="row mt-3">
        <label className="form-label" htmlFor="formFile">file input</label>
        <input className="form-control form-control-sm" type="file" id="formFile" />
      </div>

      <div className="row mt-3">
        <div className="col-sm">
          <div className="input-group input-group-sm p-0">
            <label className="input-group-text" htmlFor="formSelect">select</label>
            <select className="form-select form-select-sm" id="formSelect">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            Check
            <div className="form-check">
              <input className="form-check-input " type="checkbox" id="formCheck1" value="1" />
              <label className="form-check-label" htmlFor="formCheck1">One</label>
            </div>
            <div className="form-check">
              <input className="form-check-input " type="checkbox" id="formCheck2" value="2" />
              <label className="form-check-label" htmlFor="formCheck2">Two</label>
            </div>
          </div>

          <div className="row mt-2">
            Radio
            <div className="form-check">
              <input className="form-check-input " type="radio" id="formRadio1" value="1" name="radio" />
              <label className="form-check-label" htmlFor="formRadio1">One</label>
            </div>
            <div className="form-check">
              <input className="form-check-input " type="radio" id="formRadio2" value="2" name="radio" />
              <label className="form-check-label" htmlFor="formRadio2">Two</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        Switch
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="formSwitch1" value="1" />
          <label className="form-check-label" htmlFor="formSwitch1">One</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="formSwitch2" value="2" />
          <label className="form-check-label" htmlFor="formSwitch2">Two</label>
        </div>
      </div>

      <div className="row mt-3">
        <label className="form-label" htmlFor="formRange">Range</label>
        <input className="form-range"
          type="range"
          id="formRange"
          onChange={(event) => setInputRange(event.target.value)} />
      </div>

      <div className="row mt-3">
        <div className="input-group input-group-sm p-0">
          <span className="input-group-text">range output</span>
          <input className="form-control form-control-sm" type="text" readOnly placeholder={inputRange} />
        </div>
      </div>

      <div className="row mt-3">
        <label className="form-label" htmlFor="formDate">date</label>
        <input className="form-control form-control-sm" type="date" id="formDate" />
      </div>
    </div>
  );
}

export default Home;
