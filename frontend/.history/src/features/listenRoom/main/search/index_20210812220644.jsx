import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

Index.propTypes = {
  onSearchSubmit: PropTypes.func,
};

Index.defaultProps = {
  onSearchSubmit: null,
};

function Index(props) {
  const { register, handleSubmit} = useForm();
  const { onSearchSubmit } = props;
  return (
    <div className="search-bar">
        <form   onSubmit={handleSubmit(onSearchSubmit)}>
          <div className="input-group">
          <input
            type="text"
            className="inp-search"
            id="inp-link"
            placeholder="Search..."
            {...register("search_input")}
            autocomplete="off"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="icon-search"
            onClick={onSearchSubmit}
          />
          </div>
        </form>
      </div>
  );
}

export default Index;
