import logo from "./logo.svg";
import "./App.css";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import BasicCard from "./components/BasicCard";
import RecipeReviewCard from "./components/RecipeReviewCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Page-title">Pool Home Page</div>
      </header>
      <br />
      <></>
      <body className="App-body">
        <BasicCard />
        <br />
        <RecipeReviewCard />
      </body>
      <br />
      <footer className="App-footer">
        <FixedBottomNavigation />
      </footer>
    </div>
  );
}

export default App;
