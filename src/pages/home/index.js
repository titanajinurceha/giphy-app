import React, { useState, useEffect } from "react";
import "./style.css";

// Components
import SearchBar from "../../components/search-bar";
import ListItem from "../../components/list-item";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getImageGifs } from "../../slices";

const index = () => {
  const dispatch = useDispatch();
  const Gifs = useSelector((state) => state.giphy.value);
  // const Gifs = [];
  console.log(Gifs);
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs();
  };

  const getGifs = async () => {
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    const q = input;
    const limit = 12;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${limit}`;

    const dataGif = await fetch(endpoint).then((res) => res.json());
    dispatch(getImageGifs(dataGif.data));
  };

  const listGifs = Gifs.map(
    (gif) =>
      gif.rating == "g" && (
        <ListItem
          key={gif.id}
          url={gif.images.original.url}
          alt={gif.title}
          rating={gif.rating}
        />
      )
  );

  return (
    <>
      <SearchBar
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* {listGifs} */}

      <div className="list">

        {listGifs}
      </div>
    </>
  );
};

export default index;