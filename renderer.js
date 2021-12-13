if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', async () => {
    await navigator.serviceWorker.register('.service-worker.js');
  });
}  
