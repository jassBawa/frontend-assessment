import "./App.css";
import JsonEditor from "./components/JsonEditor";
import UiField from "./components/UiField";
import usePizzaStore from "./store/usePizzaStore";

function App() {
  const { jsonData, formFields } = usePizzaStore();

  const handleApiCall = () => {
    // this should be an async logic but for now i will be alerting it

    alert(JSON.stringify(formFields));
  };

  return (
    <>
      <main>
        <div className="json__editor">
          <JsonEditor />
        </div>
        <div className="form__view">
          <form className="rendered__form">
            {jsonData.map((field, index) => (
              <UiField key={index} field={field} />
            ))}
            <div className="form__action__container">
              <div className="form__buttons">
                <button className="btn btn--outline">Cancel</button>
                <button type="button" className="btn" onClick={handleApiCall}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
