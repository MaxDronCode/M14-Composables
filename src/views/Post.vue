<script setup>
import LoadData from '../composables/LoadData.js'
import { ref, watchEffect } from 'vue'

const props = defineProps({
  id: String,
})
const refId = ref(props.id)
const { posts, userId, getAllPosts } = LoadData(refId.value)
getAllPosts()
setTimeout(() => {
  console.log("Desde el post: ", userId.value)
}, 2000)

const user = {
  name: 'Leanne Graham',
}
</script>

<template>
  <div v-if="posts && user">
    <h1 class="text-3xl">{{ posts.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ posts.body }}</div>
    <div>Posts.userId : {{ posts.userId }}</div>
  </div>
</template>
