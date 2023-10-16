import React, { useMemo, useState } from "react";
import { makes } from "../constants";
import { IOptions } from "../types";
import SearchButton from "./SearchButton";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams();

  // Adding make and model to the URL
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make !== "" && model === "") {
      setParams({ make: make.toLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({
        make: make.toLowerCase(),
        model: model.toLowerCase(),
      });
    } else {
      alert("Please select a make and model.");
    }
  };

  /* The useMemo hook is used to calculate a value and store it in cache before rendering,
  which can help improve performance for costly operations */

  // Converting a string array to an array of objects with label and value properties
  const options: IOptions[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* Make field */}
      <div className="searchbar__item text-black">
        <Select
          options={options}
          onChange={(e: IOptions | null) => e && setMake(e.value)}
          className="w-full"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* Model field */}
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" className="absolute ml-4" />
        <input
          type="text"
          placeholder="Type model"
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input text-black rounded"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
