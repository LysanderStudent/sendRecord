import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RecordPage } from '../record/pages/Record.page'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<RecordPage />} />
        </Routes>
    )
}
