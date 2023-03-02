const LOCAL_STORAGE_KEY = "blog-posts";
let posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

export const addPost = new_post => {
  if (!validatePost(new_post)) {
    return false;
  }
  posts.push(new_post);
  updateLocalStorage();
  return true;
};

export const editPost = (index, new_post) => {
  if (!validatePost(new_post)) {
    return false;
  }
  posts[index] = new_post;
  updateLocalStorage();
  return true;
};

export const deletePost = index => {
  posts.splice(index, 1);
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
};

const validatePost = ({ title, date, summary }) => {
  return !(title === "" || date === "" || summary === "");
};

export default posts;
