import React from "react";
import "./Style.css";

const Search = props => (
  <div className="outer-container">
    <div className="form-container">
      <form onSubmit={props.handleFormSubmit}>
        <label className="input-label" htmlFor="search">
          Search for character:
        </label>
        <input
          autoComplete="off"
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          placeholder="Character Name"
          id="search"
        />

        <button>Search</button>
      </form>
    </div>

    <div id="error-msg-container">
      {props.errorMsg !== "" ? <p id="error-msg">{props.errorMsg}</p> : ""}
    </div>
  </div>
);

export default Search;
