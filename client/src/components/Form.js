import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import { Box, Button, Container, TextField } from '@mui/material';
import { scheduleService } from '../services/schedule.service';

const Form = () => {

    const [error,setError] = useState(null);
    const {register,handleSubmit} = useForm();

    const navigation = useNavigate();

    const {state} = useLocation();

    const inputName = ['numberOfTrain','startingStation','arrivalTime','stopping','departureTime','terminalStation']


    const createOrUpdate = async (data) => {

        try {
            if (state){
                await scheduleService.updateSchedule(state,data)
            }else {
                await scheduleService.createSchedule(data)
            }
            navigation('/')

        }catch (e) {
            setError(e.response.data)
        }

    }


    return (

        <Container maxWidth={"xs"} sx={{ mt:4}} >

            <h1 align="center">{state ? 'Оновити маршрут':'Створити маршрут'}</h1>

            <form onSubmit={handleSubmit(createOrUpdate)}>

                {inputName.map(item =>

                    <Box mb={2} mt={2}>

                    <TextField
                    label={item}
                    variant="outlined"
                    fullWidth
                    autoFocus
                    required
                    {...register(`${item}`)}
                >
                </TextField>

                    </Box>
                )}
                <Button type="submit" variant="contained" color="success" fullWidth>{state ? 'Оновити': 'Створити'}</Button>
            </form>

            {error && <span>{error.message}</span>}

        </Container>
    );
};

export default Form;
