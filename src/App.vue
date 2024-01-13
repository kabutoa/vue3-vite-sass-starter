<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import type { IButtonConfig } from '@/types'

const buttonConfig: IButtonConfig[] = [
  {
    id: 1,
    text: 'home page',
    type: 'home'
  },
  {
    id: 2,
    text: 'about page',
    type: 'about'
  }
]

const router = useRouter()
const onJumpRouter = (type: string) => {
  router.push({ name: type })
}
</script>

<template>
  <nav>
    <el-button v-for="button in buttonConfig" :key="button.id" @click="onJumpRouter(button.type)">
      {{ button.text }}
    </el-button>
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="el-fade-in" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
