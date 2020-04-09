import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            onChange={this.onChange}
            value={this.state.text}
            name="text"
            type="text"
            placeholder="Search Users..."
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
        {this.props.showClear && (
          <button
            onClick={this.props.clearUsers}
            className="btn btn-light btn-block"
          >
            {" "}
            Clear{" "}
          </button>
        )}
      </div>
    );
  }
}

export default Search;
