// Global styles
import Nav from "./components/nav";
import StyledGlobal from "./components/styledGlobal";

// Pages
import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <Nav />
      <AboutPage />
    </div>
  );
}

export default App;
