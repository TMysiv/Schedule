import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Schedule from './components/Schedule';
import Form from './components/Form';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Schedule/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </>
    );
};

export default App;
