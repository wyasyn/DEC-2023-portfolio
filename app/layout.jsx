import { Footer, Navbar } from "@/components";
import "./globals.scss";
import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Yasin Walum",
    description: "my personal portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <Toaster position="top right" />
            </body>
        </html>
    );
}
