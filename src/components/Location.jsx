import Map from "./Map"

export default function Location() {
    const boroughs = [
        {
            name: "Manhattan | Times Square",
            time: "12 mins"
        },
        {
            name: "Brooklyn | Atlantic Ave",
            time: "16 mins"
        },
        {
            name: "Queens | Queensboro Plaza",
            time: "24 mins"
        },
        {
            name: "The Bronx | Grand Concourse",
            time: "32 mins"
        },
        {
            name: "Staten Island | Ferry Ride",
            time: "22 mins"
        },
    ]
    return (
        <div className="flex flex-col">
            
            <div className="grid grid-cols-2 border-b">
                <span className="border-r"></span>
                <div className="flex items-start gap-1 uppercase p-8 flex-col">
                    <span className="font-unica text-sm">Main entrance</span>
                    <h1 className="font-teko font-semibold text-2xl">14 Wall Street <br /> New York, NY 10005</h1>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:border-b sm:flex sm:flex-wrap">
                <div className="flex flex-col gap-4 uppercase font-teko font-semibold text-2xl border-r p-8 text-center md:border-r items-center sm:w-full sm:border-r-0">
                    <span>Accessible via</span>
                    <div className="flex gap-4">
                        <img src="/a-line.svg" alt="Subway line A" />
                        <img src="/c-line.svg" alt="Subway line C" />
                        <img src="/r-line.svg" alt="Subway line R" />
                    </div>
                    <span>57th street</span>
                </div>
                <div className="flex flex-col gap-1 p-8 items-start justify-center sm:border-t sm:border-b md:border-t-0 md:border-b-0 sm:text-center sm:items-center md:items-start md:text-start">
                    <h1 className="uppercase font-semibold font-teko text-2xl">In the heart of Financial District</h1>
                    <p className="font-roboto">Located on the iconic Wall Street in the center of FiDi - one of the busiest neighborhoods of Lower Manhattan. Minutes away from New York Stock Exchange, Battery Park, and One World Trade Center. Easily accessible from all five boroughs of NYC.</p>
                </div>
            </div>

            <div className="md:flex border-b w-full uppercase md:flex-nowrap sm:flex-wrap sm:flex">
                {boroughs.map((borough, index) => (
                    <div key={index} className={index === 4 ? "location text-center flex flex-col gap-1 md:w-1/5 sm:w-full sm:border-t md:border-t-0 p-4" : "location text-center flex flex-col gap-1 md:border-r sm:border-r-0 md:w-1/5 sm:w-1/2 p-4"}>
                        <h1 className="font-teko">{borough.name}</h1>
                        <span className="font-unica text-2xl">{borough.time}</span>
                    </div>
                ))}
            </div>

            <Map />
            
        </div>
    )
}