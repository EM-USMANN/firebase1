import React from 'react'
import Home from './Home'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './About'

const Frontend = () => {
    return (
        <>
            <Header />

            <main>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>

            </main>


            <Footer />
        </>
    )
}

export default Frontend
