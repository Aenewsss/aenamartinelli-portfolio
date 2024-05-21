import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="flex flex-col items-center justify-center text-white gap-8 md:px-0 px-10">
            <div className="text-center">
                <h1 className="md:text-8xl text-6xl font-bold mb-2 animation-to-top">Entre em contato</h1>
                <p className="md:text-xl text-lg animation-to-top ">Vamos fechar uma parceria!</p>
            </div>
            <div className="flex gap-4 ">
                <Link className="hover:scale-105 hover:translate-y-[-4px] transition-all animation-to-top opacity-0 animation-delay-1" href="https://api.whatsapp.com/send?phone=5561992634979&text=Olá,%20Aenã.%20%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20referentes%20a%20criação%20de%20sites%20e%20aplicativos!" target="_blank">
                    <Image src="/icons/whats.svg" width={40} height={40} alt="WhatsApp" /> 
                </Link>
                <Link className="hover:scale-105 hover:translate-y-[-4px] transition-all animation-to-top opacity-0 animation-delay-2" href="mailto:aenamartinelli@gmail.com" target="_blank">
                    <Image src="/icons/gmail.svg" width={40} height={40} alt="Gmail" /> 
                </Link>
                <Link className="hover:scale-105 hover:translate-y-[-4px] transition-all animation-to-top opacity-0 animation-delay-3" href="https://www.linkedin.com/in/aenã-eloi-martinelli/" target="_blank">
                    <Image src="/icons/linkedin.svg" width={40} height={40} alt="Linkedin" /> 
                </Link>
                <Link className="hover:scale-105 hover:translate-y-[-4px] transition-all animation-to-top opacity-0 animation-delay-4" href="https://github.com/Aenewsss" target="_blank">
                    <Image src="/icons/github.svg" width={40} height={40} alt="GitHub" /> 
                </Link>
            </div>
        </section>
    )
}