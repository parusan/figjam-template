<template>
    <div class="space-y-4">
      <button 
        @click="store.updateSelectedLayers"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Get Selected Layers
      </button>
      
      <div v-if="store.selectedLayers.length" class="mt-4">
        <h2 class="text-lg font-semibold mb-2">Selected Layers:</h2>
        <ul class="space-y-1">
          <li 
            v-for="layer in store.selectedLayers" 
            :key="layer.id"
            class="text-gray-700"
          >
            {{ layer.name }} ({{ layer.type }})
          </li>
        </ul>
      </div>
    </div>
  </template>

<script setup>
import { useMainStore } from '../stores/main'

const store = useMainStore()
</script>