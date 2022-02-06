import { useEffect, useState } from 'react'

function useLocalStorageState(
    key,
    defaultValue = '',
  ) {
    const [state, setState] = useState(() => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return JSON.parse(valueInLocalStorage)
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    })
  
  
    useEffect(() => {
          window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
  
    return [state, setState]
  }
  
  export {useLocalStorageState}
  