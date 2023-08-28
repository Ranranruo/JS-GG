const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

console.log(isMobile());
console.log('touch'+(navigator.maxTouchPoints || 'ontouchstart' in document.documentElement));
