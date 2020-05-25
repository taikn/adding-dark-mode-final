(function () {
  function initColorMode () {
    function getSwitchMode () {
      if (window.localStorage &&
        window.localStorage.getItem('switchMode')) {
        return window.localStorage.getItem('switchMode');
      }
      return 'auto';
    }
    const determineColorMode = (switchMode) => {
      switch (switchMode) {
        case 'night':
          return 'dark';
        case 'auto':
          if (window.matchMedia(
            '(prefers-color-scheme: dark)').matches) {
            return 'dark';
          }
        default:
          return 'light';
      }
    }
    document.body.setAttribute('data-color-mode',
      determineColorMode(getSwitchMode()));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',initColorMode, false);
  } else {
    initColorMode();
  }
})();
