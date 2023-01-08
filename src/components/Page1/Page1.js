import { useState } from "react";

function Page1() {
  const [fileContents, setFileContents] = useState("");
  const [replaceFrom, setReplaceFrom] = useState("");
  const [replaceTo, setReplaceTo] = useState("");
  const [replacedContents, setReplacedContents] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [downloadFileName, setDownloadFileName] = useState("");
  const [downloadDisabled, setDownloadDisabled] = useState(true);

  function uploadFile(file) {
    setDownloadFileName(file.name);
    getFileContents(file);
  }

  function getFileContents(file) {
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function(event) {
      setFileContents(event.target.result);
      setReplacedContents(event.target.result);
      createDownloadContents();
    }
    reader.onerror = function(event) {
      setFileContents("error reading file");
    }
  }

  function createDownloadContents() {
    const txt = fileContents.replaceAll(replaceFrom, replaceTo);
    const blob = new Blob([txt], {type: "text/plain"});
    setDownloadLink(URL.createObjectURL(blob));
    setDownloadDisabled(false);
  }

  function replace() {
    setReplacedContents(fileContents.replaceAll(replaceFrom, replaceTo));
    createDownloadContents();
  }

  function resetReplace() {
    setReplaceFrom("");
    setReplaceTo("");
    setReplacedContents(fileContents);
  }

  return (
    <div className="container-lg mb-5">
      <div className="row">
        <h1 className="text-center">Page1</h1>
      </div>

      <div className="row mt-3">
        <h4>1. Open text file.</h4>
      </div>

      <div className="border border-2 border-secondary rounded-3 p-2">
        <div className="row mx-3">
          <label className="form-label" htmlFor="formFile">file input</label>
          <input
            className="form-control form-control-sm"
            type="file"
            accept="text/*"
            id="formFile"
            onChange={(event) => uploadFile(event.target.files[0])} />
        </div>
  
        <div className="row mx-3">
          <label className="form-label" htmlFor="fileContents">show file contents</label>
          <textarea className="form-control" id="fileContents" rows="3" readOnly value={fileContents} />
        </div>
      </div>

      <div className="row mt-3">
        <h4>2. Replace value.</h4>
      </div>

      <div className="border border-2 border-secondary rounded-3 p-2">
        <div className="row mx-3">
          <div className="col-sm mt-1">
            <div className="input-group input-group-sm">
              <span className="input-group-text" >from</span>
              <input className="form-control form-control-sm"
                type="text"
                value={replaceFrom}
                onChange={(event) => setReplaceFrom(event.target.value)} />
            </div>
          </div>
  
          <div className="col-sm mt-1">
            <div className="input-group input-group-sm">
              <span className="input-group-text" >to</span>
              <input className="form-control form-control-sm"
                type="text"
                value={replaceTo}
                onChange={(event) => setReplaceTo(event.target.value)}/>
            </div>
          </div>
        </div>
  
        <div className="row mt-2 mx-3">
          <button className="btn btn-sm btn-primary" type="button" onClick={replace}>replace</button>
        </div>
        <div className="row mt-2 mx-3">
          <button className="btn btn-sm btn-secondary" type="button" onClick={resetReplace}>reset</button>
        </div>
  
        <div className="row mx-3">
          <label className="form-label" htmlFor="replacedContents">preview</label>
          <textarea className="form-control" id="replacedContents" rows="3" readOnly value={replacedContents} />
        </div>
      </div>

      <div className="row mt-3">
        <h4>3. Save file.</h4>
      </div>

      <div className="border border-2 border-secondary rounded-3 p-2">
        <div className="row mx-3">
          {downloadDisabled ? (
            <button className="btn btn-sm btn-secondary" disabled>
              save
            </button>
          ) : (
            <a className="btn btn-sm btn-primary" href={downloadLink} download={downloadFileName}>
              save
            </a>
          )}
        </div>
      </div>

    </div>
  );
}

export default Page1;
