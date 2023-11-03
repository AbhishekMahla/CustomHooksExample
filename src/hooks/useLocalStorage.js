import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localstorageValue, setLocalstorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check for fuction
    const valueToStore =
      value instanceof Function ? value(localstorageValue) : value;
    // set to state
    setLocalstorageValue(value);
    // set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localstorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
