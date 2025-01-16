import { ref } from 'vue'
export default function loadData(postId = "") {
  const posts = ref(null)
  const BASE_URL = "https://jsonplaceholder.typicode.com"
  const urlPosts = ref(`${BASE_URL}/posts/${postId}`)
  const urlUsers = ref(`${BASE_URL}/users/`)

  const getAllPosts = async() => {
    const res = await fetch(urlPosts.value)
    const data = await res.json()
    posts.value = data
  }

  const getUserName = async(userId) => {
    const res = await fetch(`${urlUsers.value}${userId}`)
    const data = await res.json()
    return data.name
  }

  return { posts, getAllPosts, getUserName }
}
