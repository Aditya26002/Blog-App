import axios from "axios";
import Appbar from "./Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-20">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none  "
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 mt-7 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none "
            placeholder="Write your thoughts here... "
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 focus:outline-none hover:bg-blue-800 mt-7"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
