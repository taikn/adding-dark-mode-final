const localStorageCheck = () => {
  const x = '__storage_test__'
  try {
    window.localStorage.setItem(x, x)
    window.localStorage.removeItem(x)
    return true
  }
  catch (e) {
    return e instanceof DOMException && (
      e.code === 22 ||
      e.code === 1014 ||
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      (storage && storage.length !== 0)
  }
}

export const storageAvailable = typeof window === 'undefined' && localStorageCheck()
