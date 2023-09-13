// eslint-disable-next-line react/prop-types
export default function Section({id, title, subtitle}) {
    return (
        <div className="border-b text-center p-12" id={id}>
            <span className="uppercase font-unica">{subtitle}</span>
            <h1 className="uppercase font-stalinist text-2xl">{title}</h1>
        </div>
    )
}