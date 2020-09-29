import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useParams, useHistory } from "react-router-dom";
import data from "./data/query.json";
import Search from "./Search";
import "./SearchResultDetails.css";

function SearchResultDetails() {
  let { id } = useParams();
  const [isCenter, setIsCenter] = useState();

  const [resultQuery, setResultQuery] = useState({
    id: 0,
    query: "",
    procedure: "",
    result: [""],
  });
  const names = ["James", "Paul", "John", "George", "Ringo"];

  useEffect(() => {
    setResultQuery(data[id]);
    setIsCenter(false);
    console.log(resultQuery);
  }, [id, resultQuery]);

  return (
    <div className="content__main">
      <div className="search">
        <Search isCenter={isCenter}></Search>
      </div>

      <div className="description">
        <h2>Description : </h2>
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          {resultQuery.procedure}
        </p>
      </div>
      <div className="result">
        <h2>Results : </h2>
        {resultQuery.result.map((item, i) => (
          <div class="media text-muted pt-3">
            <div class="bd-placeholder-img mr-2 rounded">
              <h2 class="btn btn-secondary">
                <span class="badge badge-light">{i + 1}</span>
              </h2>
            </div>
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray para_styled">
              <div className="text__body">{item}</div>
            </div>
          </div>
        ))}
        {
          //resultQuery.result.map( item2 => (<h1>{item2}</h1>)
          //)
        }
      </div>
      <div className="price">
        <p>Prix : 180DH</p>
      </div>
    </div>
  );
}
export default SearchResultDetails;
