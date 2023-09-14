import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function Header({setIsOpen}) {
    const navigate = useNavigate()
    const items = ["about", "space", "membership", "community", "location"]
    return (
        <>
        <div className="flex justify-between p-6 items-center border-b font-teko font-semibold">
            <a href="/"><img src="/Logo.svg" alt="Company logo." /></a>
            <nav className="gap-4 uppercase sm:hidden md:flex">
                {items.map((item, index) => <a key={index} href={"#" + item} className="pb-1 hover:pb-0 hover:border-b hover:transition-all">{item}</a> )}
            </nav>
            <div className="flex gap-4 items-center">
                <button onClick={() => navigate("/application")} className="px-6 py-2 bg-accent border uppercase hover:bg-hover hover:transition-all">Join today</button>
                <div>
                    <button onClick={() => setIsOpen(true)} className="uppercase hover:border-b hover:transition-all">Log in</button>
                </div>
            </div>
        </div>
        </>
    )
}