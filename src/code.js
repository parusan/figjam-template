
// Store the selection change handler as a named function so we can remove it
const handleSelectionChange = () => {
  const selection = figma.currentPage.selection
  figma.ui.postMessage({ 
    type: 'selection-update',
    selection: selection.map(node => ({
      id: node.id,
      name: node.name,
      type: node.type
    })),
    editorType: figma.editorType
  })
}

// Show UI
figma.showUI(__html__, { 
  width: 400, 
  height: 500,
  themeColors: true 
})

// Add event listeners
figma.on('selectionchange', handleSelectionChange)

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-shape') {
      const sticky = figma.createSticky()
      sticky.text = msg.text || 'New note'
  }
}

// Cleanup function that runs when the plugin closes
figma.on('close', () => {
  // Remove the selection change listener
  figma.off('selectionchange', handleSelectionChange)
  
  // Clean up any UI message handlers
  figma.ui.onmessage = undefined 
  
  // If you have any intervals or timeouts, clear them here
  // clearInterval(yourInterval)
  // clearTimeout(yourTimeout)
})