import JSONInput from "react-json-editor-ajrm";

const JsonEditor = ({ jsonData, onChange }) => {
  const handleJsonChange = ({ jsObject }) => {
    console.log(jsObject);
    // if (!jsObject) return;

    onChange(jsObject);
  };

  return (
    <JSONInput
      id="a_unique_id"
      placeholder={jsonData}
      onBlur={handleJsonChange}
      // colors={"darktheme"}
      // locale      = { locale }
      height="100%"
      width="100%"
    />
  );
};

export default JsonEditor;
