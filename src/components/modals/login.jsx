/* eslint-disable no-unused-vars */
import { Check, X } from "lucide-react"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Login({isOpen, setIsOpen}) {
    const [ isChecked, setIsChecked ] = useState(false)
    const [ isPseudoSubmit, setIsPseudoSubmit ] = useState(false)
    return (
        <div className="modal-container">
            <div>
            <div className="flex justify-end border-t border-r border-l bg-white w-full p-4"><X className="cursor-pointer" onClick={() => setIsOpen(false)}/></div>
        <div className="flex flex-col items-center gap-8 pt-12 pb-16 px-16  shadow-lg justify-center bg-white border-b border-r border-l">
            <img src="/Logo.svg" alt="Company logo." />
            <div className="flex flex-col gap-4 font-roboto w-[300px]">
                <form onSubmit={(e) => {e.preventDefault(); setIsPseudoSubmit(true)}} id="form" className="flex gap-4 flex-col">
                    <input type="email" name="email" placeholder="Email" className="outline-0 p-3 w-full border" required /> 
                    <input type="password" name="password" placeholder="Password" className="outline-0 p-3 w-full border" required />
                </form>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                <button value={isChecked} onClick={() => {setIsChecked(!isChecked)}} className={isChecked ? "h-[16px] w-[16px] bg-black rounded-sm border flex items-center" : "h-[16px] w-[16px] rounded-sm border"}>{isChecked && <Check color="white"/>}</button>
                <span>Keep me logged in</span>
                </div>
                <span className="underline cursor-pointer">reset password</span>
            </div>
            <button type="Submit" form="form" className="w-full border bg-accent font-teko font-semibold text-center p-2 mt-4 hover:bg-hover hover:transition-all md:text-2xl sm:text-xl">Log in</button>
            {isPseudoSubmit && (
                <span>This is a frontend project, so there&apos;s no actual user dashboard for it ;&#41;</span>
            )}
            </div>
        </div>
        </div>
        </div>
    )
}