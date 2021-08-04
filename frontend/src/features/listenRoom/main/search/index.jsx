import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

Index.propTypes = {
  handleSearchSubmit: PropTypes.func,
};

Index.defaultProps = {
  handleSearchSubmit: null,
};

function Index(props) {
  const { register, handleSubmit} = useForm();
  const { handleSearchSubmit } = props;
  return (
    <div className="search-bar">
      <div className="input-group">
        <form onSubmit={handleSubmit(handleSearchSubmit)}>
          <input
            type="text"
            className="inp-search"
            placeholder="Search..."
            {...register("search_input")}
            autocomplete="off"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="icon-search"
            onClick={handleSearchSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Index;
