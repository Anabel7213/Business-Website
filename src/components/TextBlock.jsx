// eslint-disable-next-line react/prop-types
export default function TextBlock({title, description}) {
    return (
        <div className="border-b text-center p-12 flex justify-center">
            <div className="max-w-[500px]">
                <span className="uppercase font-teko font-semibold text-xl">{title}</span>
                <h1 className="font-roboto">{description}</h1>
            </div>
        </div>
    )
}