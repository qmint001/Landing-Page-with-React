import React from "react";

export function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">A landing page with React.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </p>
    </div>
  );
}
