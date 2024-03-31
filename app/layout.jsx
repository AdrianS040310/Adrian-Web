import Navbar from "../components/Navbar"

export const metadata = {
    title: "Adrian Santos",
    description: "Esta es la página principal de mi portafolio",
    keywords: "Portafolio"
};

export default function RootLayout({ children }) {
    return <html>
        <body>
            <Navbar />
            {children}
        </body>
    </html>
}