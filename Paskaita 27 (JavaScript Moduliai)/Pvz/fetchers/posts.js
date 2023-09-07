const postEndpoint = "http://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  try {
    const response = await fetch(postEndpoint);
    if (response.ok) {
      const posts = await response.json();
      return posts;
    } else {
      console.log("Kazkas negerai");
    }
  } catch (error) {
    console.log("Kazkas negerai");
  }
}
