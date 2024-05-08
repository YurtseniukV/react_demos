import {useEffect, useState,useRef} from "react";
import {json} from "node:stream/consumers";

// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

const useToggle = (initValue:boolean= false)=>{
    const[value,setValue]=useState<boolean>(initValue)

    const toggle = () => {
        setValue(!value);
    }

return[value,toggle];
}



// ----------- код з консультації--------------
//const useToggle = (defaultValue: boolean) => {
//     const [value, setValue] = useState<boolean>(defaultValue);
//
//     function toggleValue(valueState: boolean) {
//         setValue(prevValue => !valueState);
//     }
//
//     return [value, toggleValue];
// };
//
// let [value,toggleValue] = useToggle(true);
//
// toggleValue(false);






//2. usePrevious - hook that allows a component to keep track of the previous value of a variable


const usePrevious = <T, > (value:T) :T | undefined =>{

    const previousRef=useRef<T>();

    useEffect(() => {
        previousRef.current = value;
    }, [value]);

    return previousRef.current;
}


// --- код з лекції----
// const usePrevious = <T, >(value: T): T | undefined => { --- кома використ при такій типізації стрілочної функції
//     const currentRef = useRef<T>(value);
//     const previousRef = useRef<T | undefined>();
//
//     if (currentRef.current !== value) {    -------- currentRef це обєкт,вся інф яка в ньому міститься знах в підобєкті .current
//         previousRef.current = currentRef.current;
//     }
//     return previousRef.current;
// }
// //
// usePrevious<number>(100);



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




export {
    useToggle,
    usePrevious,
    useStorage
}