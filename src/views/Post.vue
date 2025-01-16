<script setup>
import LoadData from '../composables/LoadData.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: String,
})

const { posts, getAllPosts, getUserName } = LoadData(props.id)

const userName = ref('')

onMounted(async() => {
  await getAllPosts()
  userName.value = await getUserName(posts.value.userId)
})
</script>

<template>
  <div v-if="posts && userName">
    <h1 class="text-3xl">{{ posts.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ userName }}</div>
    <div>{{ posts.body }}</div>
  </div>
</template>
