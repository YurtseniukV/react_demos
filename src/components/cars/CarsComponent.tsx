import React, {useEffect, useState} from 'react';
import {carService} from "../../services/api.services";
import {ICarWithAuthModel} from "../../models/ICarWithAuthModel";
import CarComponent from "../car/CarComponent";



const CarsComponent = () => {

    const [cars, setCars] = useState<ICarWithAuthModel[]>([])

    useEffect(() => {
        carService.getAllCars().then((value) =>{
        if (value) {
            setCars(value.items);
        }
        })
    }, []);


    return (
        <div>
            {
                cars.map (car => <CarComponent key={car.id} car={car}/>)
            }
            </div>
    );
};

export default CarsComponent;