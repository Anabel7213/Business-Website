import Request from "./modals/request"
import { useState } from "react"

export default function Footer() {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    const [ data, setData ] = useState("")
    const pseudoDB = []
    const handlePseudoSubscribe = () => {
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
    const socials = [
        {
            link: "https://www.linkedin.com/in/anastasia-bielievitina-b20396259/",
            icon: "/facebook.svg"
        },
        {
            link: "https://www.instagram.com/_aesth_eticco_/",
            icon: "/instagram.svg"
        },
        {
            link: "https://github.com/Anabel7213",
            icon: "/twitter.svg"
        }
    ]
    return (
        <div className="flex flex-col gap-10 items-center p-16">
            <img src="/Name.svg" alt="Company logo." width="624px"/>
            {!isSubmitted ? (
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="uppercase font-teko font-semibold">Subscribe to our newsletter</h1>
                    <div className="flex border md:mb-4 sm:mb-0">
                        <input type="email" name="email" value={data} onChange={(e) => setData(e.target.value)} placeholder="Email" className="outline-0 p-3 font-roboto bg-white md:w-[400px] sm:w-[264px]"/>
                        <button onClick={handlePseudoSubscribe} className="px-6 py-2 bg-accent border-l hover:bg-hover hover:transition-all uppercase font-teko font-semibold">{isLoading ? "Almost there" : "Submit"}</button>
                    </div>
                </div>
            ) : <Request showSubtitle="false" title="Successfully subscribed." description="Thank you! You've just made a step to becoming part of The Zone family. We will be notifying you as soon as new events come out." /> }
            <div className="flex gap-4">
                {socials.map((social, index) => (
                    <a key={index} href={social.link}><img src={social.icon} alt="Social media icon." className="hover:animate-spin md:w-[48px] md:h-auto sm:w-[32px] sm:h-auto" /></a>
                ))}
            </div>
            <p className="text-center font-roboto">14 Wall Street New York, NY 10005 | <a href="mailto:abielievitina@gmail.com?subject=Collaboration%20Inquiry" className="underline">info@thezone.com</a> <br /> <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | All rights reserved</p>
        </div>
    )
}