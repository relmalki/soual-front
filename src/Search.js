import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton, Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { useHistory } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
function Search(style) {

  let classes = "";

  const className = "" + (style.isCenter ? "center" : "nocenter"); 

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const onChangeSearchMsg = (e) => {
    setSearchText(e.target.value);
  };

  const searchClicked = () => {
    const link = "/search/" + searchText;
    history.push(link);
  };

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      {
        const link = "/search/" + searchText;
        history.push(link);
      }
    }
  };

  return (
    <div className={className}>
      <div id="cover">
        <form action={searchClicked}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search"
                required
                type="text"
                onChange={onChangeSearchMsg}
                onKeyDown={enterPressed}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div className="td" id="s-cover">
              <button
                onClick={searchClicked}
                className="btn btn-outline-warning"
                type="button"
              >
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
