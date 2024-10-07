import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// Components
import EnterDetailsModal from "../components/EnterDetailsModal"

const Room = () => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {
        console.log(location.state);

    }, [location])

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                {isOpen ? (
                    <EnterDetailsModal {...location.state} />
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default Room