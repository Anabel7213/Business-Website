export default function Events() {
    const items = [
        {
            image: "/events-01.png",
            title: "fundraising & project pitching",
            subtitle: "grants from our partner organizations"
        },
        {
            image: "/events-02.png",
            title: "meditation & HIIT",
            subtitle: "world class equipment & trainers"
        },
        {
            image: "/events-03.png",
            title: "professional speed networking",
            subtitle: "exclusive guests & like-minded people"
        },
        {
            image: "/events-04.png",
            title: "content creation",
            subtitle: "content writing & brand awareness"
        },
    ]
    return (
        <div className="flex w-full">
            {items.map((item, index) => (
                <div key={index} className={index === 3 ? "flex flex-col border-b" : "flex flex-col border-r border-b"}>
                    <img src={item.image} alt="A photo of one of the event categories." />
                    <div className="flex flex-col text-center uppercase p-4 border-t">
                        <h1 className="font-teko font-semibold text-lg">{item.title}</h1>
                        <span className="font-unica">{item.subtitle}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}