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
  const inp_add_link = document.getElementById("inp-add-link");
  if(inp_add_link){
  inp_add_link.addEventListener("focusin",()=>{
    document.getElementsByClassName("input-group")[0].style.width = "60%";
    inp_add_link.style.width = "90%";
  })
  inp_add_link.addEventListener("focusout",()=>{
    document.getElementsByClassName("input-group")[0].style.width = "30%";
    inp_add_link.style.width = "80%";


  })
}
  return (
    <div className="search-bar">
        <form   onSubmit={handleSubmit(handleSearchSubmit)}>
          <div className="input-group">
          <input
            type="text"
            className="inp-search"
            id="inp-add-link"
            placeholder="Type youtube link"
            {...register("search_input")}
            autocomplete="off"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="icon-search"
            onClick={handleSearchSubmit}
          />
          </div>
        </form>
      </div>
  );
}

export default Index;
