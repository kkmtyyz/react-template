import { useState } from "react";

function Page2() {
  const API_URL = "http://localhost:4000";

  const [getResponse, setGetResponse] = useState("");
  const [postResponse, setPostResponse] = useState("");

  const [requestText, setRequestText] = useState("");
  const [selectValue, setSelectValue] = useState("One");
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);

  async function getRest(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (e) {
      console.error(e);
      return {"message": e.message, "url": url};
    }
  }

  async function postRest(url, data) {
    try {
      const method = "POST";
      const body = JSON.stringify(data);
      const headers = {
        "Content-Type": "application/json"
      };

      const response = await fetch(url, {method, headers, body});
      return response.json();
    } catch (e) {
      console.error(e);
      return {"message": e.message, "url": url};
    }
  }

  async function getRequest() {
    const response = await getRest(API_URL + "/get-test");
    setGetResponse(JSON.stringify(response));
  }

  async function postRequest() {
    const data = {
      requestText: requestText,
      selectValue: selectValue,
      switch1: switch1,
      switch2: switch2,
    }
    const response = await postRest(API_URL + "/post-test", data);
    setPostResponse(JSON.stringify(response));
  }

  return (
    <div className="container-lg mb-5">
      <div className="row">
        <h1 className="text-center">Page2</h1>
      </div>

      <div className="row mt-3">
        <h4>Get Request</h4>
      </div>

      <div className="border border-2 border-secondary rounded-3 p-2">
        <div className="row mx-3">
            <button className="btn btn-sm btn-primary" type="button" onClick={getRequest}>
              get request
            </button>
        </div>
  
        <div className="row mx-3">
          <label className="form-label" htmlFor="getResponse">response</label>
          <textarea className="form-control" id="getResponse" rows="5" readOnly value={getResponse} />
        </div>
      </div>

      <div className="row mt-3">
        <h4>Post Request</h4>
      </div>

      <div className="border border-2 border-secondary rounded-3 p-2">
        <div className="row mx-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" >message</span>
            <input className="form-control form-control-sm"
              type="text"
              value={requestText}
              onChange={(event) => setRequestText(event.target.value)}/>
          </div>
        </div>
  
        <div className="row mx-3">
          <div className="col-sm mt-1">
            <div className="input-group input-group-sm p-0">
              <label className="input-group-text" htmlFor="formSelect">select</label>
              <select className="form-select form-select-sm"
                  id="formSelect"
                  onChange={(event) => setSelectValue(event.target.value)}>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
          </div>
  
          <div className="col-sm mt-1">
            <div className="form-check form-switch">
              <input className="form-check-input"
                  type="checkbox"
                  id="formSwitch1"
                  onChange={(event) => setSwitch1(event.target.checked)} />
              <label className="form-check-label" htmlFor="formSwitch1">One</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input"
                  type="checkbox"
                  id="formSwitch2"
                  onChange={(event) => setSwitch2(event.target.checked)} />
              <label className="form-check-label" htmlFor="formSwitch2">Two</label>
            </div>
          </div>
        </div>
  
        <div className="row mx-3">
            <button className="btn btn-sm btn-primary" type="button" onClick={postRequest}>
              post request
            </button>
        </div>
  
        <div className="row mx-3">
          <label className="form-label" htmlFor="getResponse">response</label>
          <textarea className="form-control" id="getResponse" rows="5" readOnly value={postResponse} />
        </div>
      </div>

    </div>
  );
}

export default Page2;
