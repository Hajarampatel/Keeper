import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Note from "./components/Note";
// import notes from './notes'
import MakeNote  from "./components/MakeNote";


function App() {
  return (
    <div>
      <Header />
      <MakeNote />
      <Footer />
    </div>
  );
}

export default App;
