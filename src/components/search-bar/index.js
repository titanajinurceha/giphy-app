import React from "react";
import "./style.css";

import FormInput from "../form-input";
import Button from "../button";

const index = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Title Gif : </label>
      <FormInput
        type="text"
        id="search"
        className="search"
        onChange={handleChange}
        value={input}
        autoComplete="off"
      />
      <Button type="submit" className="submit">
        Search
      </Button>
    </form>
  );
};

export default index;