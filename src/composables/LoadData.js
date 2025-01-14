import { ref } from 'vue'
export default function loadData(id = "") {
  const posts = ref([])
  const url = ref(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const userId = ref("")

  const getAllPosts = async() => {
    const res = fetch(url.value)
    .then((res) => res.json())
    .then((json) => (posts.value = json, userId.value = posts.value.userId))
    console.log("Desde loadData user id: ", userId.value) 
  }

  return { posts, userId, getAllPosts }
}
