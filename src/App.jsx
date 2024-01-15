import "./App.css";
import JsonEditor from "./components/JsonEditor";
import UiField from "./components/UiField";
import usePizzaStore from "./store/usePizzaStore";

function App() {
  const { jsonData } = usePizzaStore();

  return (
    <>
      <main>
        <div className="json__editor">
          <JsonEditor />
        </div>
        <div className="form__view">
          <form action="" className="rendered__form">
            {jsonData.map((field, index) => (
              <UiField key={index} field={field} />
            ))}
            <div className="form__action__container">
              <div className="form__buttons">
                <button className="btn btn--outline">Cancel</button>
                <button className="btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
