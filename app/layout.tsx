import "./globals.css";
import { LeftBar } from "@/components/LeftBar";
import { RightBar } from "@/components/RightBar";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between mx-auto ">
                    <div className="px-2 sm:px-4 xxl:px-8 h-screen">
                        <LeftBar />
                    </div>
                    <div className="flex-1 px-2  h-screen md:min-w-[600px] border-x-[1px] border-borderGray">
                        {children}
                    </div>
                    <div className="hidden lg:flex ml-4 xl:ml-8 px-2 h-screen flex-1">
                        <RightBar />
                    </div>
                </div>
            </body>
        </html>
    );
}
