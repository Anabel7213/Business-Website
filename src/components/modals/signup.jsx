import { ChevronDown } from "lucide-react";
import Section from "../Section";
import { useNavigate } from "react-router-dom"
import Request from "./request";
import { useState } from "react";

export default function Signup() {
    const [ isPseudoSubmitted, setIsPseudoSubmitted ] = useState(false)
    const handlePseudoSubmit = () => {
        setIsPseudoSubmitted(true)
        setTimeout(() => navigate("/"), 8000)
    }
    const navigate = useNavigate()
    return (
        <div className={isPseudoSubmitted ? "flex flex-col md:m-8 sm:m-4 border-r border-t border-l" : "flex flex-col md:m-8 border sm:m-4"}>
            <div className="flex justify-between w-full p-6 border-b">
                <img src="/Logo.svg" alt="Company logo." />
                {!isPseudoSubmitted && (
                    <div className="font-teko font-semibold flex gap-4 items-center">
                        <button type="Submit" className="px-6 py-2 bg-accent border uppercase hover:bg-hover hover:transition-all" form="signup">Submit</button>
                        <div>
                            <button onClick={() => navigate("/")} className="uppercase hover:border-b hover:transition-all">Cancel</button>
                        </div>
                    </div>
                )}
            </div>
            {!isPseudoSubmitted ? (
            <div>
            <Section title="Application" subtitle="The Zone Member"/>
            <form onSubmit={handlePseudoSubmit} id="signup" className="md:flex md:flex-nowrap sm:flex sm:flex-wrap justify-center mt-16 pb-16 flex-col gap-8 sm:mx-4 md:mx-0">
                <div className="flex sm:flex-col md:flex-row gap-8 justify-center">
                <div className="md:flex-col gap-4 md:flex md:flex-nowrap sm:flex sm:flex-wrap">
                    <h1 className="font-teko font-semibold text-xl uppercase">Personal details</h1>
                    <input placeholder="Full Name" type="text" name="fullName" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" required />
                    <input placeholder="Phone" type="phone" name="phone" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                    <input placeholder="Email" type="email" name="email" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" required />
                </div>
                <div className="md:flex-col gap-4 md:flex md:flex-nowrap sm:flex sm:flex-wrap">
                    <h1 className="font-teko font-semibold text-xl uppercase">Company details</h1>
                    <input placeholder="Company Name" type="text" name="companyName" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                    <input placeholder="Occupation" type="text" name="occupation" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                    <input placeholder="Website" type="text" name="website" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                </div>
                </div>
                <div className="flex sm:flex-col md:flex-row gap-8 justify-center">
                    <div className="md:flex-col gap-4 md:flex md:flex-nowrap sm:flex sm:flex-wrap">
                        <h1 className="font-teko font-semibold text-xl uppercase">Membership</h1>
                        <div className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 bg-white flex justify-between">
                        <select name="membershipType" className="outline-0 w-full" required>
                            <option value={null} selected disabled hidden>Select</option>
                            <option value="PrivateOffice">Private Office</option>
                            <option value="AssignedDesk">Assigned Desk</option>
                            <option value="SharedSpace">Shared Space</option>
                        </select>
                        <ChevronDown />
                        </div>
                        <textarea placeholder="Comment" type="text" name="comment" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0 h-full resize-none" />
                    </div>
                    <div className="md:flex-col sm:flex-col gap-4 md:flex md:flex-nowrap sm:flex sm:flex-wrap">
                        <h1 className="font-teko font-semibold text-xl uppercase">Address</h1>
                        <div className="md:flex sm:flex sm:flex-wrap md:flex-nowrap sm:flex-col md:flex-row gap-6">
                        <input placeholder="United States" value={"United States"} type="text" name="country" readOnly className="border md:w-[150px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                        <input placeholder="State" type="text" name="state" className="border md:w-[150px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                        </div>
                        <input placeholder="Street" type="text" name="street" className="border md:w-[324px] sm:w-full placeholder:font-roboto p-3 outline-0" />
                        <input placeholder="Zip" type="text" name="zip" className="border md:w-[150px] sm:w-full self-end placeholder:font-roboto p-3 outline-0" />
                    </div>
                </div>
            </form>
            </div>
            ) : <Request cover="grid-bg" title="Application submitted" description="
            Please check your email for further instructions. Feel free to call our representative if you have any questions. We are so happy to welcome you to the Zone family!" showSubtitle="true" subtitle="You will be redirected to homepage in 8s" />}
        </div>
    )
}