import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* container for sidebar and main content */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
