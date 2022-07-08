import "./key";
import React, { component } from "react";
import axios from "axios";
import { useState } from "react";
import Recipetile from "./Recipetile";
import { Landingimg } from "./Landingimg";
import { Text } from "./Text";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [image, setimage] = useState(0);
  const [text, settext] = useState(0);

  const app_id = "809d9bd3";
  const app_key = "23cb8b96acd42dcb6ab51c7b2c7b509c";
  var url = `https://api.edamam.com/search?q=${query}&from=0&to=30&app_id=${app_id}&app_key=${app_key}`;

  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits);
    result.data.more === false ? settext(text + 1) : settext(0);
    console.log(text);
    console.log(result);
  }
  const onSearch = (e) => {
    e.preventDefault();
    getRecipes();
    setQuery("");
    setimage(image + 1);
  };

  return (
    <div className="App flex justify-center items-center flex-col">
      <h1 className=" text-4xl my-2 py-5 font-bold font-serif text-black  ">
        RecipeWala 👨‍🍳
      </h1>
      <form action="" className="my-2">
        <input
          type="text"
          className=" text-2xl font-serif md:text-3xl lg:text-3xl px-2 py-2  border rounded-xl border-black mx-1 "
          placeholder="Enter Ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          onClick={onSearch}
          className="font-serif rounded-xl text-2xl md:text-3xl lg:text-3xl mx-1 bg-blue-600 px-2 py-2 hover:bg-white hover:text-blue-600 text-white cursor-pointer  border border-black"
        />
      </form>
      <div className="grid grid-cols-1 grid-flow-row gap-[25px] lg:grid-cols-3 md:grid-cols-2 ">
        {recipes.map((recipe) => {
          return <Recipetile recipe={recipe} />;
        })}
      </div>
      <Landingimg image={image} />
      <Text value={text} />
      
    </div>
  );
}

export default App;
