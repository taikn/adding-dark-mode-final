(function () {
  function ready() {
    alert('DOM is ready');
  }
  function storageAvailable () {
    var x = '__storage_test__';
    try {
      window.localStorage.setItem(x, x);
      window.localStorage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        (window.localStorage && window.localStorage.length !== 0);
    }
  }
  function getSwitchMode () {
    if (storageAvailable() &&
      window.localStorage.getItem('switchMode')) {
      return window.localStorage.getItem('switchMode');
    }
    return 'auto';
  }
  function determineColorMode (switchMode) {
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
  function setInitColorMode () {
    document.body.setAttribute('data-color-mode',
      determineColorMode(getSwitchMode()));
    ready();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setInitColorMode, false);
  } else {
    setInitColorMode();
  }
})();
