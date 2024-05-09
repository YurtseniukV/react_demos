import {useEffect, useState} from "react";



// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage


type Value = string | number | boolean | null;

const useStorage = <Value>(key: string, localStorageObject: Value) => {
    const [value, setValue] = useState<Value>(() => {
        const storageValue = localStorage.getItem(key);
        return storageValue !== null ? JSON.parse(storageValue) : localStorageObject;
    });
    

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};


// ---- з лекції ------
//const useStorage = (key, localStorageObject,defualtValue) => {
//
//     const [value, setValue] = useState(() => {
//         let jsonValue = localStorageObject.getItem(key);
//         if (jsonValue !== null) return JSON.parse(jsonValue);
//
//         if (typeof defualtValue === 'function') {
//             return defualtValue();
//         } else {
//             return defualtValue;
//         }
//
//     });
//
//     useEffect(() => {
//         if (value === undefined) return localStorageObject.removeItem(key);
//         localStorageObject.setItem(key, JSON.stringify(value));
//     }, [key, value, localStorageObject]);
//
//
//     return [value, setValue];
// }// and of custom hook
//
// useStorage('asd', 'def', window.localStorage);

