// eslint-disable-next-line react/prop-types
export default function CTA({title, action, icon}) {
    return (
        <div className="border-b border-t p-12 flex justify-center grid-bg">
            <div className="flex flex-col gap-4 items-center font-teko font-semibold text-xl uppercase">
                <span>{title}</span>
                <button onClick={() => {}} className="border bg-accent hover:bg-hover hover:transition-all pt-3 pb-2 px-6 w-fit flex gap-2 uppercase"><span>{icon}</span> {action}</button>
            </div>
        </div>
    )
}