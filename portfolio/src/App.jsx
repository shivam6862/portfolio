import { AllRoutes } from "./AllRoutes";
import Navigation from "./components/navigation/Navigation";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Navigation />
      <AllRoutes />
    </div>
  );
}

export default App;
