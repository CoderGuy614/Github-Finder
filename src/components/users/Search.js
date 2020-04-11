import React, { useState, useContext } from "react";
import GithubContext from "../../Context/github/githubcontext";
import AlertContext from "../../Context/alert/alertContext";

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          onChange={onChange}
          value={text}
          name="text"
          type="text"
          placeholder="Search Users..."
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className="btn btn-light btn-block"
        >
          {" "}
          Clear{" "}
        </button>
      )}
    </div>
  );
};

export default Search;
