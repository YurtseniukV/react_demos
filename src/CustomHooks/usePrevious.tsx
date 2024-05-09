//2. usePrevious - hook that allows a component to keep track of the previous value of a variable


import {useEffect, useRef} from "react";

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