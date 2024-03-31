import Link from "next/link"
import Image from 'next/image'
import { Yeseva_One } from "next/font/google"

const yeseva_One = Yeseva_One({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],
})

export default function Navbar() {
    return (
        <nav>
            <div className={yeseva_One.className}>
                <Image
                    width={500}
                    height={500}
                    src=""
                    alt="Logo Adrian"
                />
                <div class="name-logo">
                    <span class="name">Adrian Santos</span>
                    <span>Web Development</span>
                </div>
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/portafolio">Portafolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
