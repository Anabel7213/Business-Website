// eslint-disable-next-line react/prop-types
export default function Request({title, description, subtitle, showSubtitle, cover}) {
    return (
        <div className={`${cover} uppercase flex flex-col items-center text-center p-16 mt-8 border-t border-b w-full`}>
            <div className="max-w-[500px] flex flex-col gap-4">
            <h1 className="font-stalinist">{title}</h1>
            <p className="font-unica">{description}</p>
            {showSubtitle === "true" && (
                <span className="p-2 w-full border bg-white font-teko">{showSubtitle === "true" ? subtitle : null}</span>
            )}
            </div>
        </div>
    )
}