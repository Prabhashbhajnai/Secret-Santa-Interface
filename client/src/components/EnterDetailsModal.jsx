import { useEffect } from "react"

const EnterDetailsModal = (props) => {
    useEffect(() => {
        console.log(props);

    }, [])

    return (
        <>
            <div className='w-1/3 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
                <div className='flex flex-col gap-3 px-3 py-2 text-white '>

                    {props.type === 'host' ? (
                        <h1 className='text-3xl text-center'>Welcome, {props.name}</h1>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <h1 className='text-3xl text-center'>Please Enter your details: </h1>

                            <div>
                                <h1 className='text-2xl font-medium'>Enter your name</h1>
                                <input
                                    type='text'
                                    className='w-full h-8 bg-gray-300 rounded-md px-2 text-black text-md font-sans'
                                    placeholder='Name'
                                />
                            </div>
                        </div>
                    )}

                    <h1 className='text-2xl font-medium'>Enter Your Address:</h1>

                    <input
                        type='text'
                        className='w-full h-8 bg-gray-300 rounded-md px-2 text-black text-md font-sans'
                        placeholder='Address line 1'
                    />
                    <input
                        type='text'
                        className='w-full h-8 bg-gray-300 rounded-md px-2 text-black text-md font-sans'
                        placeholder='Address line 2'
                    />
                    <input
                        type='text'
                        className='w-full h-8 bg-gray-300 rounded-md px-2 text-black text-md font-sans'
                        placeholder='Address line 3'
                    />
                    <button className='w-full h-10 mt-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold text-2xl '>
                        Submit
                    </button>
                </div>

            </div>
        </>
    )
}

export default EnterDetailsModal