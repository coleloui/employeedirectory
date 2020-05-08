import React from "react";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="people">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="people"
          list="peoples"
          type="text"
          className="form-control"
          placeholder="Search for Employee"
          id="people"
        />
        <datalist id="peoples">
          {props.peoples.map((people, key) => (
            <option
              value={`${people.name.first} ${people.name.last}`}
              key={key}
            />
          ))}
        </datalist>
      </div>
    </form>
  );
}

export default SearchForm;
