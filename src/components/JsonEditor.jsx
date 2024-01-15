import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import usePizzaStore from "../store/usePizzaStore";

const JsonEditor = () => {
  const handleJsonChange = ({ jsObject }) => {
    setJsonData(jsObject);
  };
  const { jsonData, setJsonData } = usePizzaStore();

  return (
    <JSONInput
      id="json_editor"
      placeholder={jsonData}
      onBlur={handleJsonChange}
      locale={locale}
      height="100%"
      width="100%"
    />
  );
};

export default JsonEditor;
