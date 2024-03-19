import { useState, useEffect } from "react";

import axios from "axios";

const useFetchBlogNames = () => {
  const [blogNames, setBlogNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('http://localhost:3001/getNames');

        if (res.data === "Error") {
          alert("Something went wrong with our servers. Try again later.");
        } else {
          setBlogNames(res.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return { blogNames, isLoading };
};

export default useFetchBlogNames;
