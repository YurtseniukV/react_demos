import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLocalStorageData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";


const axiosInstanse = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstanse.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const ITokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair')
request.headers.set('Authorization' , 'Bearer ' + ITokenObtainPair.access)

}
    return request
})


const authService={
    authentication:async(authData:AuthDataModel):Promise<boolean> =>{
        let response;
        try{
            response = await axiosInstanse.post<ITokenObtainPair>('/auth',authData);
            localStorage.setItem('tokenPair',JSON.stringify(response.data));

        } catch (e) {
            console.log(e)
        }
       

        return !!(response?.data?.access && response?.data?.refresh)
    },

    refresh:async(refreshToken:string)=>{
        const response=await axiosInstanse.post<ITokenObtainPair>('/auth/refresh', {refresh:refreshToken});
        localStorage.setItem('tokenPair',JSON.stringify(response.data))
    }
}

const carService={
    getAllCars:async (page:string)=> {
        try {
            const response = await axiosInstanse.get<ICarPaginatedModel>('/cars',{params:{page:page}});
                return response.data;
        }catch (e) {
            const axiosError = e as AxiosError;
            if(axiosError?.response?.status === 401){
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getAllCars(page);
            }
        }
    }
}



export {
    authService,
    carService
}