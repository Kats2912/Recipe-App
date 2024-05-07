import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Recipies from "../Recipies";
import useSWR from "swr";

const InputBar = () => {
  const [recipe, setRecipe] = useState("");

  //function for fetcher for handling apis
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);
  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  else if (isValidating) return <div className="Loading">Loading...</div>;
  else return (
      <>
          
      <Form.Group className="mb-3">
        <Form.Label>Search Recipe:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Chicken Tikka"
          value={recipe}
          onChange={(e) => {
            setRecipe(e.target.value);
          }}
        />
      </Form.Group>
      <Recipies />
    </>
  );
};

export default InputBar;
