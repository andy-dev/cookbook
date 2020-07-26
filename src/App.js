import React, { useState } from "react";
import { render } from "react-dom";

// returns promise that will get resolve with the file
// you give it in a random time
function getFile(file) {
  return new Promise(function(resolve) {
    fakeAjax(file, resolve);
  });
}

function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
}

const App = () => {
  const [items, setItems] = useState([]);
  const [fileText, setFileText] = useState("");

  // Example 1 - Async Await Simple
  const getFileText = async () => {
    var text1 = await getFile("file1");
    setFileText(text1);
  };

  // Example 2 -

  return (
    <div>
      <button onClick={getFileText}>Get File Text</button>
      <div>
        <code>
          <p>File Text Response:</p>
          <pre>{JSON.stringify(fileText, null, 4)}</pre>
        </code>
      </div>
      <div>
        <code>
          <p>Print Files Sequentially</p>
          <pre>{JSON.stringify(fileText, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
};

render(<App></App>, document.getElementById("root"));
