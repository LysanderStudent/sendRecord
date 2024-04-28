import React from 'react';
import { Route, Routes } from 'react-router-dom';0
import { BasePage } from './BasePage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<BasePage />} />
        </Routes>
    )
}
