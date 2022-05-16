<script setup>
import sourceData from '@/data.json';

const threads = sourceData.threads;
const posts = sourceData.posts;
const users = sourceData.users;

const postById = (postId) => {
  return posts.find((p) => p.id === postId);
};

const userById = (userId) => {
  return users.find((u) => u.id === userId);
};
</script>

<template>
  <div>Hello from Home Page</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>
        {{ userById(postById(postId).userId).name }}
      </p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>
