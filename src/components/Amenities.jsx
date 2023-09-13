export default function Amenities() {
    const items = [
        {
            title: "Workspace",
            subtitle: "Furnished shared & private space"
        },
        {
            title: "Gym & Pool",
            subtitle: "Equipment, lockers & showers"
        },
        {
            title: "Outdoors",
            subtitle: "Courtyard & rooftop terrace"
        },
        {
            title: "24/7 Access",
            subtitle: "Full time access to facilities"
        },
        {
            title: "Creator Studio",
            subtitle: "Soundproof space with tools & equipment"
        },
        {
            title: "Hot Bar",
            subtitle: "Coffee, refreshments & snacks"
        },
        {
            title: "Library",
            subtitle: "Quiet space to relax and get smarter"
        },
        {
            title: "Event Space",
            subtitle: "On demand event arrangements"
        }
    ]
    return (
        <div className="w-full flex flex-wrap">
        {items.map((item, index) => (
            <div key={index} className={index === 0 || index === 1 || index === 2 || index === 4 || index === 5 || index === 6 ? "flex flex-col gap-1 p-4 w-1/4 text-center justify-center items-center uppercase border-b border-r" : "flex flex-col gap-1 p-4 w-1/4 text-center justify-center items-center uppercase border-b"}>
                <h1 className="font-teko text-lg">{item.title}</h1>
                <span className="font-unica">{item.subtitle}</span>
            </div>
        ))}
        </div>
    )
}