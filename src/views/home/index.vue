<template>
  <div class="home">
    <div class="home-title">home page</div>
    <div class="home-message">
      <el-button @click="onMessage">test message</el-button>
    </div>
    <div class="home-request">
      <el-button @click="onRequest">test request</el-button>
    </div>
    <div class="home-pinia">
      {{ count }} {{ doubleCount }}
      <el-button @click="increment">add count</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/api'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

const onMessage = () => {
  ElMessage('this is a message')
}

const onRequest = async () => {
  const userInfo = await getUserInfo()
  console.log(userInfo)
}
</script>
