import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  // anytime we need to update content on the screen => STATE
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    // whenever we make a network request, it is a asynchronous operation
    // so we need to add in a promise or something like that to handle the
    // results we'll eventually get back
    try {
      const response = await yelp.get("/search", {
        //customizing the request we are making to yelp api
        // similiar to: /search?limit=50
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      // the actual JSON containing the data from the request
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong.");
    }
  };

  // call searchApi when component
  // is first rendered. BAD CODE!
  // infinite loop! render and render and render and ...
  // searchApi("pasta");

  //useEffect is a hook or essentially a function that allows us to run some
  //snippet of code just one time when our component is first rendered to the screen.
  useEffect(() => {
    searchApi("pasta");
  }, []);

  //So we're returning the things that we need inside of our component inside of an array.
  return [searchApi, results, errorMessage];
};
