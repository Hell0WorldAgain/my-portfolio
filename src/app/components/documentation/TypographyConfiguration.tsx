export const TypographyConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Typography</h3>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-midnight_text dark:text-grey" >1. Change Font family over here : <span className="font-semibold text-base">src/app/globals.css</span>  </p>
                <div className="py-4 px-3 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2 mb-3">
                        {`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');`}
                    </p>
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        {`
html {
  font-family: "Inter Tight", sans-serif;
}`}
                    </p>
                </div>
            </div>
        </>
    )
}