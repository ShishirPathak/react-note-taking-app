// import { useEffect, useState } from "react"

// export function useLocalStorage<T>(key:string, initialValue: T | (() => T))
// {
//     const [value, setValue] = useState<T>(
//         ()=>
//         {
//             const jsonValue = localStorage.getItem(key)
            
//             if(jsonValue == null){
//                 if (typeof initialValue === "function"){
//                     return (initialValue as () => T)()
//                 }
//                 else{
//                     return initialValue
//                 }
//             }
//             else {
//                 return JSON.parse(jsonValue)
//             }
//         }
//     )

//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value, key])

//     return [value, setValue] as [T, typeof setValue]
// }

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue == null) {
      // If no value exists, return the initial value
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      // THIS IS THE FIX:
      // Try to parse the stored value. If it fails, fall back to the initial value.
      try {
        return JSON.parse(jsonValue);
      } catch (error) {
        console.error(`Error parsing localStorage key “${key}”:`, error);
        if (typeof initialValue === "function") {
          return (initialValue as () => T)();
        } else {
          return initialValue;
        }
      }
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

console.log(`[useLocalStorage] Hook for key "${key}" is returning:`, value);

  return [value, setValue] as [T, typeof setValue];
}