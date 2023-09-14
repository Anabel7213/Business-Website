export default function Membership() {
    const items = [
        {
            membership: "Private Office",
            price: "$3400 / month",
            description: "For up to 8 people teams. Access to all amenities & private events."
        },
        {
            membership: "Assigned Desk",
            price: "$1400 / month",
            description: "Dedicated desk with lockable storage. Access to all amenities & private events."
        },
        {
            membership: "Shared Space",
            price: "$800 / month",
            description: "Hot desk, phone booth & lounge space seating. Does not include Gym & Pool access."
        }
    ]
    return (
        <div className="flex w-full flex-wrap">
            {items.map((item, index) => (
                <div key={index} className={index === 0 || index === 1 ? "flex items-center text-center px-8 py-16 flex-col md:w-1/3 sm:w-full md:border-r sm:border-r-0 border-b" : "flex items-center text-center px-8 py-16 flex-col md:w-1/3 sm:w-full border-b"}>
                    <h1 className="font-semibold font-teko text-2xl uppercase">{item.membership}</h1>
                    <span className="font-unica uppercase">{item.price}</span>
                    <p className="font-roboto max-w-[200px] pt-2">{item.description}</p>
                </div>
            ))}
        </div>
    )
}