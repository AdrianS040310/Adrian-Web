import { Yeseva_One } from "next/font/google"
import Image from 'next/image'

const yeseva_One = Yeseva_One({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"],
})

export default function HomePage() {
    return (
        <section id="main" class="main-container">
            <div class="programmer">
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className={yeseva_One.className}>
                <h1>Freelance Web Developer</h1>
                <p>Hi, my name is Adrián Santos and I am a Junior Web Developer specializing in Frontend. Currently, I
                    am in the process of training as a Senior University Technician in the area of Multiplatform
                    Software Development.</p>
            </div>
        </section>
    );
}