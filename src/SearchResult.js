import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useParams, useHistory } from "react-router-dom";
import data from "./data/data.json";
import Search from "./Search";
import "./SearchResult.css";
function SearchResult() {
  let { id } = useParams();
  const history = useHistory();

  const [resultQuery, setResultQuery] = useState({
    id: 0,
    query: "",
    result: [""],
  });
  const names = ["James", "Paul", "John", "George", "Ringo"];

  const itemClicked = () => {
    const link = "/details/2";
    history.push(link);
  };

  const getResultId = (query) => {
    switch (query) {
      case "google":
        return 0;
      case "maroc":
        return 1;
      case "cin":
        return 2;
      default:
        return 3;
    }
  };

  useEffect(() => {
    setResultQuery(data[getResultId(id)]);
    console.log(resultQuery);
  }, [id, resultQuery]);

  return (
    <div className="Search__Container">
      <div className="Search__View">
        <Search isCenter={false}></Search>
      </div>
      <div className="Search__ViewR">
        <div className="Search__Result">
          <div className="titlebar__container">
            <h2>
              Results for <strong color="">{id}</strong> are :
            </h2>
          </div>
          {resultQuery.result.map((item, i) => (
            <div class="media text-muted pt-3" onClick={itemClicked}>
              <div class="bd-placeholder-img mr-2 rounded">
                <h2 class="btn btn-secondary">
                  <span class="badge badge-light">{i + 1}</span>
                </h2>
              </div>
              <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong class="d-block text-gray-dark">@precdure</strong>
                {item}
              </p>
            </div>
          ))}
          {
            //resultQuery.result.map( item2 => (<h1>{item2}</h1>)
            //)
          }
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
