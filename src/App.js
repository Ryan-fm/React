import React, { Component } from 'react';
import './style/App.css';
import MainHeader from "./view/min-header"
import MainFooter from "./view/min-footer"
import RouterIndex from "./router/index"
import "./view/index.css"
class App extends Component {
  render() {
      return <div className="pageWrap">
          <MainHeader />
          <main className="main">
            <RouterIndex></RouterIndex>
          </main>
          <MainFooter/>
      </div>;
  }
}

export default App;
