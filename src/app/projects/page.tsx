'use client'

import { useRef } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function Page() {

    const router = useRouter()

    const divRef = useRef<HTMLDivElement>(null)

    function showTransitionAnimation() {
        divRef.current!.style.transform = 'translateY(0)'
        setTimeout(() => {
            router.push('/')
        }, 1000);
    }

    return (
        <main className="my-4">
            <p onClick={showTransitionAnimation} className="text-xl cursor-pointer font-bold hover:text-2xl ml-4 inline">←</p>
            <h1 className="md:text-8xl text-6xl font-bold mb-2 animation-to-top text-center mt-4">Projetos de sucesso</h1>
            <div ref={divRef} className="fixed w-screen h-screen bg-black z-20 top-0 left-0 translate-y-[100%] transition-transform duration-1000"></div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12">
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/walkrapp.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/validapres.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/thiagos-prime.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/grupo-sks.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/fight-logic.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/qro-agendar.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/facilita-juridico.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/arte-que-acontece.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/iluminus.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/gingado-capoeira.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/azevedo-eloi.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/vinum-eventos.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/ancora-pesquisas.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/lucas-mesiano.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/abreu-films.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/adescart.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/irmandade-fepas.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/arvore-memorias.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/th-transportes.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/ballet-alice.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/rb-barbearia.webp" width={500} height={500} alt="WalkrApp" />
                </div>
                <div className="overflow-hidden transition-all duration-500">
                    <Image unoptimized className="object-cover w-full cursor-pointer hover:scale-150 opacity-70 hover:opacity-100 transition-all duration-500" src="/projects/qria-tech.webp" width={500} height={500} alt="WalkrApp" />
                </div>
            </div>

        </main>
    )
}