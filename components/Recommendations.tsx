import Link from "next/link";
import Image from "./Image";

const Recommendations = () => {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4" >
            {/* User card */}
            <div className=" flex items-center justify-between">
                {/* Image and user info */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Ankan Biswas" w={100} h={100} tr={true} />
                    </div>
                    <div>
                        <h1 className="text-md font-bold">
                            John Doe
                        </h1>
                        <span className="text-textGray text-sm">@johnDoe</span>
                    </div>
                </div>
                {/* Button  */}
                <button className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</button>
            </div>
            <div className=" flex items-center justify-between">
                {/* Image and user info */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Ankan Biswas" w={100} h={100} tr={true} />
                    </div>
                    <div>
                        <h1 className="text-md font-bold">
                            John Doe
                        </h1>
                        <span className="text-textGray text-sm">@johnDoe</span>
                    </div>
                </div>
                {/* Button  */}
                <button className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</button>
            </div>
            <div className=" flex items-center justify-between">
                {/* Image and user info */}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image path="general/avatar.png" alt="Ankan Biswas" w={100} h={100} tr={true} />
                    </div>
                    <div>
                        <h1 className="text-md font-bold">
                            John Doe
                        </h1>
                        <span className="text-textGray text-sm">@johnDoe</span>
                    </div>
                </div>
                {/* Button  */}
                <button className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</button>
            </div>
            <Link href="/" className="text-iconBlue">Show More</Link>

        </div>
    )
}

export default Recommendations;
