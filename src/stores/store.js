import { defineStore } from 'pinia';

export const usePluginStore = defineStore('plugin', {
  state: () => ({
    selectedNodes: [],
    editorType: null
  }),
  actions: {
    setSelectedNodes(nodes) {
      this.selectedNodes = nodes;
    },
    createShape() {
      parent.postMessage({ 
        pluginMessage: { 
          type: 'create-shape',
          text: 'New sticky note'
        } 
      }, '*');
    }
  }
});