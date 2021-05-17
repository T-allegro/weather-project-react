import React from "react";

export default function Form() {
    return (
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="City..."
              className="form-control"
              autocomplete="off"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-dark"
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              id="current-city"
              className="btn btn-outline-dark"
            >
              Current City
            </button>
          </div>
        </div>
      </form>
    );
  }