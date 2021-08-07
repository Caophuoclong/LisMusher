import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import "./addYoutubeLink.scss"

Index.propTypes = {
  onAddSubmit: PropTypes.func,
};

Index.defaultProps = {
  onAddSubmit: null,
};

function Index(props) {
  const { register, handleSubmit} = useForm();
  const { onAddSubmit } = props;
  return (
    <div className="add-link-form">
        <form   onSubmit={handleSubmit(onAddSubmit)}>
          <div className="input-group">
          <input
            type="text"
            className="inp-search"
            id="inp-add-link"
            placeholder="Type youtube link"
            {...register("add_link_input")}
            autocomplete="off"
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="icon-search"
            onClick={onAddSubmit}
          />
          </div>
        </form>
      </div>
  );
}

export default Index;
