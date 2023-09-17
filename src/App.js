import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import Navbar, { NewsFooter } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  pageSize = "12";

  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }

  setProgress = async (value) => {
    this.setState({ progress: value });
  };

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          waitingTime={100}
          loaderSpeed={300}
          transitionTime={500}
          color="#E6000B"
          progress={this.state.progress}
          onLoaderFinished={() => this.setState({ progress: 0 })}
        />
        <Routes>
          <Route
            index
            exact
            path="/"
            element={
              <News
                key="general"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                setProgress={this.setProgress}
                category="technology"
              />
            }
          />
        </Routes>
        <NewsFooter />
      </>
    );
  }
}

export default App;
