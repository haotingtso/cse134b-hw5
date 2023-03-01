const LOCAL_STORAGE_KEY = "blog-posts";
let posts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

export const addPost = ({ title, date, summary }) => {
  posts.push({
    title,
    date,
    summary,
  });
  updateLocalStorage();
};

export const editPost = (index, new_post) => {
  posts[index] = new_post;
  updateLocalStorage();
};

export const deletePost = index => {
  posts.splice(index, 1);
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
};

export default posts;
