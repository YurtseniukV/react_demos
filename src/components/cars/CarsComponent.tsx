import React, {useEffect, useState} from 'react';
import {carService} from "../../services/api.services";


const CarsComponent = () => {


    useEffect(() => {
        carService.getAllCars().then(value =>console.log(value) )
    }, []);

    return (
        <div>
        <CarsComponent/>
            </div>
    );
};

export default CarsComponent;