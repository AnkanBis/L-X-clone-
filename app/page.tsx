import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";


export default function Home() {
    return (
        <div>
            <div className="flex justify-between text-white font-bold border-b-[1px] border-borderGray ">
                <Link className="pb-3 flex flex-1 items-center justify-center border-b-4 border-iconBlue hover:bg-borderGray" href="/">For you</Link>
                <Link className="pb-3 flex flex-1 items-center justify-center hover:bg-borderGray" href="/">Following</Link>
            </div>
            <Share />
            <Feed />
        </div>
    );
}
