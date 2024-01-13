import "./App.css";
import UiField from "./components/UiField";
import data from "./data/pizza.json";
import JsonEditor from "./components/JsonEditor";
import { useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState(data);

  const handleJsonChange = (newJson) => {
    setJsonData(newJson);
  };

  return (
    <>
      <main>
        <div className="json__editor">
          <JsonEditor jsonData={jsonData} onChange={handleJsonChange} />
        </div>
        <div className="form__view">
          <form action="" className="rendered__form">
            {jsonData.map((field, index) => (
              <UiField key={index} field={field} />
            ))}
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
