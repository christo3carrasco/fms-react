import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mx-auto">
                    <div className="card-body">
                      Round 1 - Easy mode. Easy mode.
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mx-auto">
                    <div className="card-body">
                      Round 2 - Hard mode. Hard mode.
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mx-auto">
                    <div className="card-body">
                      Round 3 - Random mode. Random mode.
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
