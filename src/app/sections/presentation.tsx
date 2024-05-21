import Image from "next/image";

export default function PresentationSection() {

    return (
        <section className="flex items-center justify-center text-white md:flex-nowrap flex-wrap">
            <div className="md:mt-0 mt-8">
                <h1 className="md:md:text-8xl text-6xl text-6xl font-bold mb-2 animation-to-top">Aenã Martinelli</h1>
                <p className="md:text-2xl text-lg animation-to-top ">Engenheiro de Software Full Stack e Mobile</p>
            </div>
            <Image
                unoptimized
                src="/me.png"
                width={300}
                height={300}
                className="rounded-full mb-4 object-cover animation-to-top delay-200"
                alt="Your Name - Photo"
            />
        </section>
    )
}