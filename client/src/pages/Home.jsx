import React from 'react'

// Assets
import home_bg from '../assets/home_bg.svg'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${home_bg})`, fontFamily: '"Dancing Script", cursive' }} >

                {/* Glass effect background */}
                <div className='w-2/3 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>

                    {/* Content */}
                    <div className='flex flex-col items-center w-full h-full px-3 py-5 text-white gap-4'>
                        <h1 className='text-5xl font-extrabold'>Welcome To Secret Santa Picker</h1>

                        <h2 className='text-3xl mt-5 font-semibold'>Select the below options:</h2>

                        <div className='flex justify-around w-full mt-5'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-2xl'>Create a new group for Secret Santa</p>
                                <button className='w-full h-12 text-3xl bg-green-500 hover:bg-green-600 text-white rounded-md'>Create Room</button>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <p className='text-2xl'>Join an existing group for Secret Santa</p>
                                <button className='w-full h-12 text-3xl bg-green-500 hover:bg-green-600 text-white rounded-md'>Join a Room</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home