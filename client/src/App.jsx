// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
function App() {
    return (
        <>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<IndexPage />}></Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/account/:subpage?"
                            element={<AccountPage />}
                        />
                        <Route
                            path="/account/:subpage/:action"
                            element={<AccountPage />}
                        />
                    </Route>
                </Routes>
            </UserContextProvider>
        </>
    )
}

export default App
