import React, { Component } from "react";
import defaultNewsImage from "../unknown.jpg";
export default class NewsItems extends Component {
  render() {
    let {
      imageUrl,
      newsTitle,
      description,
      newsUrl,
      publishedAt,
      newsAuther,
      newsSource,
    } = this.props;

    let newsDate = new Date(publishedAt);
    const formattedDate = newsDate.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <>
        <div className="card shadow" style={{ height: "35em" }}>
          <img
            src={imageUrl ? imageUrl : defaultNewsImage}
            className="card-img-top"
            alt="News"
            style={{ height: "20em", overflow: "hidden" }}
          />
          <div className="card-body text-start">
            <h5 className="card-title">
              {newsTitle ? newsTitle.slice(0, 50) : "Unknown"}...
            </h5>
            <p className="card-text">
              {description
                ? description.slice(0, 200)
                : "Please click read more as there is no description for this news..."}
              ...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                - by {newsAuther ? newsAuther : "Unknown"}
                <br />- on {publishedAt ? formattedDate : "Unknown"}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {newsSource ? newsSource : "Unknown"}
          </span>
        </div>
      </>
    );
  }
}
