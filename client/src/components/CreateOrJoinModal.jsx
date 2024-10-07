import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'

const CreateOrJoinModal = ({ isOpen, setIsOpen, type }) => {
    const [isDisabled, setIsDisabled] = useState(true)

    const codeRef = useRef(null)
    const nameRef = useRef(null)

    const navigate = useNavigate()

    const handleChange = () => {
        if (codeRef.current.value.length === 11) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    const handleCreate = () => {
        navigate('/abc-def-ghi', { state: { name: nameRef.current.value, type: "host" } })
    }

    const handleJoin = () => {
        navigate('/abc-def-ghi', { state: { name: "" } })
    }

    useEffect(() => {
        if (isOpen && type === 'join') {
            codeRef.current.focus()
        }
        else if (isOpen && type === 'create') {
            nameRef.current.focus()
        }
    }, [isOpen, type])

    return (
        <>
            <div className='w-1/4 px-3 py-2 text-white bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 absolute z-50'>

                {type === 'join' ? (
                    <>
                        <h1 className='text-2xl'>Enter your code below:</h1>

                        <div className='flex gap-2 items-center'>
                            <input
                                ref={codeRef}
                                type='text'
                                className='w-full h-10 bg-gray-300 rounded-md my-3 px-2 py-1 text-black  text-lg font-sans'
                                placeholder='Code'
                                onChange={handleChange}
                                onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false) || e.key === 'Enter' && handleJoin()}
                            />
                            <button
                                className={`w-1/3 h-10 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold text-2xl ${isDisabled && 'bg-slate-400 hover:bg-slate-400 cursor-not-allowed'}`}
                                onClick={handleJoin}
                            >
                                Join
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-5">
                        <h1 className="text-center text-2xl">Create a new Room</h1>

                        <div>
                            <h1 className="text-xl font-medium">Enter your name</h1>
                            <input
                                ref={nameRef}
                                type='text'
                                className='w-full h-10 mt-1 bg-gray-300 rounded-md px-2 py-1 text-black  text-lg font-sans'
                                placeholder='Name'
                                onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false) || e.key === 'Enter' && handleCreate()}
                            />
                        </div>

                        <button
                            className='w-full h-10 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold text-2xl'
                            onClick={handleCreate}
                        >
                            Create
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default CreateOrJoinModal