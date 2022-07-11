import { Route, Switch } from "wouter-preact";
import Home from "./pages";
import DashboardPage from "./pages/dashboardPage";
import NotFound from "./pages/_404";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/dashboard" component={DashboardPage}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  )
}

export default App;