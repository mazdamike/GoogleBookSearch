import React from "react";
import "./books.css";

function BookSearch() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4" style={{ textAlign: "center" }}>Google Books Search</h1>
        <p className="lead" style={{ textAlign: "center" }}>Search for and Save Books of Interest</p>
      </div>
      <div className="card" style={{ marginBottom: 15 }}>
        <div className="card-body">
        <h3>Book Search</h3>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="bookSearch" placeholder="Enter a book to search for" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Search</button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body" >
<h3>Results</h3>
      <div className="card" style={{ marginBottom: 15 }}>
        <div className="card-body">
        <button type="submit" className="btn btn-primary buttons" style={{ float: "right" }}>Save</button>
        <button type="submit" className="btn btn-primary buttons" style={{ float: "right", marginRight: 10 }}>View</button>
  </div>
      </div>
      <div className="card">
        <div className="card-body">
        <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Save</button>
        <button type="submit" className="btn btn-primary" style={{ float: "right", marginRight: 10 }}>View</button>
  </div>
      </div>

      </div>
        </div>
    </div>

  );
}

export default BookSearch;