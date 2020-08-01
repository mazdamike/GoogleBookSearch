import React from "react";
import "./books.css";

function SavedBooks() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4" style={{ textAlign: "center" }}>Google Books Search</h1>
        <p className="lead" style={{ textAlign: "center" }}>Search for and Save Books of Interest</p>
      </div>
      
      <div className="card">
        <div className="card-body" >
<h3>Saved Books</h3>
      <div className="card" style={{ marginBottom: 15 }}>
        <div className="card-body">
        <button type="submit" className="btn btn-primary buttons" style={{ float: "right" }}>Delete</button>
        <button type="submit" className="btn btn-primary buttons" style={{ float: "right", marginRight: 10 }}>View</button>
  </div>
      </div>
      <div className="card">
        <div className="card-body">
        <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Delete</button>
        <button type="submit" className="btn btn-primary" style={{ float: "right", marginRight: 10 }}>View</button>
  </div>
      </div>

      </div>
        </div>
    </div>

  );
}

export default SavedBooks;