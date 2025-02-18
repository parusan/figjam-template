<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { usePluginStore } from '@/stores/store.js'

const store = usePluginStore()

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
    <div class="p-4 min-h-screen bg-gray-100 dark:bg-gray-800">
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
        <h1 class="text-2xl font-bold mb-4 dark:text-white">
            FigJam Plugin
        </h1>
        
        <div class="space-y-4">
            <button 
            @click="store.createShape"
            class="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
            Create Sticky Note
            </button>
            
            <div v-if="store.selectedNodes.length" class="mt-4">
            <h2 class="text-lg font-semibold mb-2 dark:text-white">Selected Nodes:</h2>
            <ul class="space-y-1">
                <li 
                v-for="node in store.selectedNodes" 
                :key="node.id"
                class="text-gray-700 dark:text-gray-300"
                >
                {{ node.name }} ({{ node.type }})
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
</template>