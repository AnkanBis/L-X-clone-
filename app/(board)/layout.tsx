import { LeftBar } from "@/components/LeftBar";
import { RightBar } from "@/components/RightBar";
import { ClerkProvider } from "@clerk/nextjs";




export default function BoardLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between mx-auto ">
                <div className="px-2 sm:px-4 xxl:px-8 min-h-screen">
                    <LeftBar />
                </div>
                <div className="flex-1  min-h-screen md:min-w-[600px] border-x-[1px] border-borderGray">
                    {children}
                    {modal}
                </div>
                <div className="hidden lg:flex ml-4 xl:ml-8 px-2 min-h-screen flex-1">
                    <RightBar />
                </div>
            </div>
        </ClerkProvider>
    );
}
