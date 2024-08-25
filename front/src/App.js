import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
// import { Routes } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/chats" component={Chatpage} />
    </Switch>
  );
}

export default App;
