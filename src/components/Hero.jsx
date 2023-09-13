import { useState } from "react"
import Request from "./modals/request"

export default function Hero() {
    const pseudoDB = []
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    const [ data, setData ] = useState("")
    const HandlePseudoSubmit = () => {
        try {
            setIsLoading(true)
            pseudoDB.push(data)
            console.log(pseudoDB)
            setTimeout(() => setIsLoading(false), 1000)
            setTimeout(() => setIsSubmitted(true), 1100)
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div className={!isSubmitted ? "text-center flex flex-col items-center w-full gap-6" : "text-center flex flex-col items-center w-full"}>
            <img src="/Name.svg" alt="Company name." className="pt-20 pb-4" />
            <div className="flex flex-col items-center gap-4">
                <span className="uppercase font-unica">A co-working space in</span>
                <div className="uppercase font-teko py-2 px-6 border w-full bg-white">Lower Manhattan</div>
            </div>
            {!isSubmitted ? (
            <div className="flex border mb-4">
                <input type="email" name="email" value={data} onChange={(e) => {setData(e.target.value)}} placeholder="Email" className="outline-0 p-3 font-roboto bg-white w-[364px]"/>
                <button onClick={HandlePseudoSubmit} className="px-6 py-2 bg-accent hover:bg-hover hover:transition-all border-l uppercase font-teko font-semibold">{isLoading ? "Hold on tight" : "Request tour"}</button>
            </div>
            ) : <Request cover="grid-bg" showSubtitle="true" title="check your inbox for invitation." description="Please select a date and time that best fits your schedule for an exclusive, personalized tour of The Zone's exquisite space. You'll be accompanied by your own dedicated guide." subtitle="Thank you. We look forward to seeing you." /> }
            <div className={!isSubmitted ? "w-full h-fit border-b border-t grid grid-cols-3" : "w-full h-fit border-b grid grid-cols-3"}>
                <img src="/office-01.png" alt="A photo of the co-working space area." className="border-r"/>
                <img src="/office-02.png" alt="A photo of the co-working space area." className="border-r"/>
                <img src="/office-03.png" alt="A photo of the co-working space area." />
            </div>
        </div>
    )
}