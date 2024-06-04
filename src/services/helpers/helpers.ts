const retriveLocalStorageData = <T,>(key:string) =>{
    const pairJSON = localStorage.getItem(key) || '';
    let pair = JSON.parse(pairJSON);
if (!pairJSON){
    return {} as T
}

return pair as T
}


export   {
    retriveLocalStorageData
}