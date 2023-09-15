const axios = require("axios");

const fetch = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/");
    console.log(response.data);
  } catch (error) {
    console.log("Something went wrong");
  }
};
const fetchId = async (id: number) => {
  try {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(post.data);
  } catch (error) {
    console.log(error);
  }
};


fetch();
