<script setup>
import { onMounted, onUnmounted, ref } from 'vue'


// Store the message handler as a named function
const handleMessage = (event) => {
  const message = event.data.pluginMessage
  if (message.type === 'selection-update') {
    store.setSelectedNodes(message.selection)
  }
}

onMounted(() => {
  // Add the message listener
  window.addEventListener('message', handleMessage)
})

onUnmounted(() => {
  // Remove the message listener
  window.removeEventListener('message', handleMessage)
  
  // Clear any store state if needed
  store.$reset()
})
</script>

<template>
  <router-view />
</template>