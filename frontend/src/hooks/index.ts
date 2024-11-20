import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/bulk`).then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, []);
  return { loading, blogs };
};
