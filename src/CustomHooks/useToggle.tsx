// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

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