import React, { useEffect, useState } from 'react';
import { Button, Container, TextField} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { scheduleService } from '../services/schedule.service';
import TableComponent from './Table';

const Schedule = () => {

    const [trains, setTrains] = useState([]);
    const [filterTrains, setFilterTrains] = useState([]);
    const [error, setError] = useState(null);

    const navigation = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        scheduleService.getAll().then(value => {
                setTrains(value);
                setFilterTrains(value);
            });
    }, []);

    const searchTrain = (data) => {
        let filterOfTrain = [...trains];

        if (data.search) {
            filterOfTrain = filterOfTrain.filter(train => train.terminalStation.toLowerCase()
                .includes(data.search.toLowerCase()));
        }

        setFilterTrains(filterOfTrain);
        reset();
    };

    const deleteTrain = async (id) => {
        let deletedTrain = filterTrains;

        try {
            await scheduleService.deleteSchedule(id);
            deletedTrain = deletedTrain.filter(train => train.id !== id);
            setFilterTrains(deletedTrain);
        } catch (e) {
            setError(e.response.data);
            console.log(error);
        }
    };

    const createOrUpdate = (id) => {
        navigation('form', { state: id });
    };

    const sortByNumber = () => {
        let sortTrain = [...filterTrains];
        sortTrain = sortTrain.sort((a, b) => a.numberOfTrain - b.numberOfTrain);
        setFilterTrains(sortTrain);
    };

    return (
        <div>
            <div className={'header'}>
                <Container sx={{ paddingTop: '140px' }}>
                    <h2>Станція Львів</h2>

                    <form onSubmit={handleSubmit(searchTrain)}>
                        <TextField
                            className={'input'}
                            fullWidth
                            variant="filled"
                            label="Станція прибуття"
                            {...register('search')}
                            InputProps={{ endAdornment: <Button type={'submit'}>Пошук</Button> }}
                        />
                    </form>

                </Container>
            </div>

            <TableComponent
                filterTrains={filterTrains}
                createOrUpdate={createOrUpdate}
                deleteTrain={deleteTrain}
                sortByNumber={sortByNumber}
            />
        </div>
    )

};

export default Schedule;
