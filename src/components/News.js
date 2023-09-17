import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner, Alert } from "../components/Navbar";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.props.setProgress(50);

    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    try {
      const res = await fetch(apiUrl);
      const result = await res.json();
      this.setState({
        isLoaded: true,
        articles: result.articles,
        totalResults: result.totalResults,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error,
      });
    }

    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    try {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${
        this.props.pageSize
      }`;

      let data = await fetch(apiUrl);
      let parseData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parseData.articles),
        page: this.state.page + 1,
      });
    } catch {
      return (
        <>
          <div className="container">Unable to fetch more data!</div>
        </>
      );
    }
  };

  render() {
    let { error, isLoaded } = this.state;
    if (error) {
      return <div className="alert">error</div>;
    } else if (!isLoaded) {
      return <Spinner />;
    } else if (this.state.articles) {
      return (
        <>
          <div className="container text-center">
            <h1
              className="text-dark fw-bolder"
              style={{
                margin: "2em auto 1em auto",
                borderBottom: "2px solid rgba(0,0,0,0.2)",
                textTransform: "uppercase",
                paddingBottom: "0.5em",
                fontFamily: "Verdana, sans-serif",
              }}
            >
              Todays Top {this.props.category} News
            </h1>
          </div>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url}>
                      <NewsItems
                        imageUrl={element.urlToImage}
                        newsTitle={element.title}
                        description={element.description}
                        newsUrl={element.url}
                        publishedAt={element.publishedAt}
                        newsAuther={element.author}
                        newsSource={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
      );
    } else {
      return (
        <>
          <div
            className="container d-flex justify-content-center align-items-center "
            style={{ width: "100vw", height: "100vh" }}
          >
            <Alert
              closeButton={false}
              type="danger"
              message="Unable to fetch data from News API !!"
            />
          </div>
        </>
      );
    }
  }
}
