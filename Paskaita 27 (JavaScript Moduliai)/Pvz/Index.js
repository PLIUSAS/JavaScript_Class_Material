import { getPosts } from "./fetchers/posts.js"; // Kelias nuo index.js iki to failo kuri norim importuoti.
import { generatePosts as generatePostsHtml } from "./generators/posts.js";
import { addToHtml } from "./utils/index.js";

async function generatePost() {
  const posts = await getPosts();
  const postHtml = generatePostsHtml(posts);

  addToHtml(document.body, postHtml);
}
generatePost();
