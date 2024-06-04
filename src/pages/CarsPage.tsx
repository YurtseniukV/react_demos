import React, {useEffect, useState} from 'react';
import CarsComponent from "../components/cars/CarsComponent";
import PaginationComponent from "../components/pagination/PaginationComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/api.services";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

  const [query,setQuery] = useSearchParams();

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items:[],
        prev:null,
        next:null,
        total_items:0,
        total_pages:0
    })

    useEffect(() => {
        carService.getAllCars(query.get('page') || '1').then((value) =>{
            if (value) {
                setCarsPaginatedObject(value);
            }
        })
    }, [query]);


    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;