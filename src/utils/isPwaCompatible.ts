const isPwaCompatible = () =>
  navigator.serviceWorker && 'Notification' in window;

export { isPwaCompatible };
export default isPwaCompatible;
