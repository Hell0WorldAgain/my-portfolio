export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-midnight_text dark:text-grey" ><span className="font-semibold text-lg dark:text-white">1. Override Colors</span> <br />
                    For any change in colors : src/utils/extendedConfig.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>dark_black: "#1B1D1E",</span>
                        <span>purple_blue: "#4928FD",</span>
                        <span>purple: "#BA81EE",</span>
                        <span>blue: "#70B5FF",</span>
                        <span>orange: "#FFAF68",</span>
                        <span>green: "#79D45E",</span>
                        <span>pink: "#F4889A",</span>
                        <span>blue_gradient: "#D9F3FC",</span>
                        <span>yellow_gradient: "#FDF1D3",</span>
                        <span>paleYellow: "#F6E683",</span>
                        <span>dark_yellow_gradient: "#443f32",</span>
                        <span>dark_blue_gradient: "#303d42"</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-midnight_text dark:text-grey" ><span className="font-semibold text-lg dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : src/utils/extendedConfig.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>dark_black: "#1B1D1E",</span>
                        <span>purple_blue: "#4928FD",</span>
                    </p>
                </div>
            </div>
        </>
    )
}