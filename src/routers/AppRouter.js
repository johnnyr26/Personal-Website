import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import HomePage from '../pages/HomePage';


const AppRouter = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    </Router>
);

export default AppRouter;