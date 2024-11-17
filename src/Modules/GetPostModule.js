import axios from "axios";

export async function getPosts({
  setArticles,
  setIsLoading,
  endpoint,
  setErrors,
}) {
  try {
    console.log(endpoint);
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/getPost",
      { params: { page: endpoint } }
    );
    if (response.status === 200) {
      setIsLoading(false);
    }
    setArticles(response.data.posts);
  } catch (err) {
    setIsLoading(false);
    setErrors(err.response.data.message);
  }
}

export function handleSorting(e, articles, setArticles) {
  const sortBy = e.target.value;
  if (sortBy === "latest") {
    const sortedArticles = [...articles].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setArticles(sortedArticles);
  } else {
    const sortedArticles = [...articles].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setArticles(sortedArticles);
  }
}
