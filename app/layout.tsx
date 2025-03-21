import "./globals.css";
import { LeftBar } from "@/components/LeftBar";
import { RightBar } from "@/components/RightBar";
import { ClerkProvider } from "@clerk/nextjs";




export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
