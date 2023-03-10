import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

function App() {
  return (
    <div className="h-screen bg-blue-200">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
