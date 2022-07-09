import { Route, Switch } from "wouter-preact";
import Home from "./pages";
import NotFound from "./pages/_404";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  )
}

export default App;