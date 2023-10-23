import Option from "./components/Option";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <Select value="C++">
        <Option value="JS" text="JavaScript" />
        <Option value="Cpp" text="C++" />
        <Option value="HTML" text="HTML" />
        <Option value="CSS" text="CSS" />
        <Option value="JAVA" text="JAVA" />
      </Select>

      <Select value="HP">
        <Option value="Mac" text="MacBook" />
        <Option value="HP" text="HP" />
        <Option value="Lenovo" text="Lenovo" />
      </Select>
    </div>
  );
}

export default App;
