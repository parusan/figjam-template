import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');

// src/store.js
import { defineStore } from 'pinia';

export const usePluginStore = defineStore('plugin', {
  state: () => ({
    selectedNodes: [],
    message: 'Hello Figma!'
  }),
  actions: {
    setSelectedNodes(nodes) {
      this.selectedNodes = nodes;
    },
    createRectangle() {
      parent.postMessage({ pluginMessage: { type: 'create-rectangle' } }, '*');
    }
  }
});