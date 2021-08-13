import React, { useState, useEffect } from "react";
import "./style.css";

// Components
import ListItem from "../../components/list-item";


//Redux
import { useDispatch, useSelector } from "react-redux";
import { getImageGifs } from "../../slices";

const index = () => {
  const dispatch = useDispatch();
  const Gifs = useSelector((state) => state.giphy.value);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const api_key = process.env.REACT_APP_GIPHY_KEY;
    const limit = 12;
    const endpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`;

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
      {/* {listGifs} */}
      <div className="list">
        
        {listGifs}
      </div>

  
    </>
  );
};

export default index;