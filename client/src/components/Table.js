import React from 'react';
import { Button, Container, TableBody, TableCell, TableContainer, TableHead, TableRow,Table } from '@mui/material';

const TableComponent = ({filterTrains,deleteTrain,createOrUpdate,sortByNumber}) => {

    const headName = ['Потяг', 'Станція відправлення', 'Час прибуття', 'Час зупинки', 'Час відправлення',
        'Станція прибуття', 'Оновити маршрут', 'Видалити маршрут'];

    return (
        <div className={'main'}>

            <Container>
                <h3>Розклад Потягів</h3>

                <TableContainer sx={{ marginTop: '20px' }}>
                    <Table>

                        <TableHead>
                            <TableRow>
                                {headName.map(item => <TableCell align="center">{item}</TableCell>)}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filterTrains && filterTrains.map(value => (
                                <TableRow key={value.id}>
                                    <TableCell align="center">{value.numberOfTrain}</TableCell>
                                    <TableCell align="center">{value.startingStation}</TableCell>
                                    <TableCell align="center">{value.arrivalTime}</TableCell>
                                    <TableCell align="center">{value.stopping} хв</TableCell>
                                    <TableCell align="center">{value.departureTime}</TableCell>
                                    <TableCell align="center">{value.terminalStation}</TableCell>
                                    <TableCell align="center">

                                        <Button color="success" size={'small'}
                                                onClick={() => {createOrUpdate(value.id)}}>
                                            Оновити
                                        </Button>
                                    </TableCell>

                                    <TableCell align="center">
                                        <Button color="error" size={'small'}
                                                onClick={() => {deleteTrain(value.id)}}>
                                            Видалити
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>

                <Button onClick={() => createOrUpdate()} variant="contained"
                        sx={{ mt: 2 }}>Створити
                </Button>

                <Button onClick={sortByNumber} variant="contained" color={'success'}
                        sx={{mt: 2,ml: 2}}>Сортувати
                </Button>

            </Container>
        </div>

    );
};

export default TableComponent;
