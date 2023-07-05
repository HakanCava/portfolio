import Main from "./pages/main/Main";
import { useContext } from "react";
import { themeContext } from "./Context";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Main />
    </div>
  );
};

export default App;
