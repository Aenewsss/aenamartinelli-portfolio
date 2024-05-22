'use client'

import { useRef } from "react";
import { useRouter } from "next/navigation"

export default function Page() {

    const router = useRouter()
    
    const divRef = useRef<HTMLDivElement>(null)

    function showTransitionAnimation(){
        divRef.current!.style.transform = 'translateY(0)'
        setTimeout(() => {
            router.push('/')
        }, 1000);
    }

    return (
        <main className="container mx-auto md:px-0 px-4 my-4">
            <p onClick={showTransitionAnimation} className="text-xl cursor-pointer font-bold">←</p>
            <h1 className="md:text-8xl text-6xl font-bold mb-2 animation-to-top text-center mt-4">Projetos de sucesso</h1>
            <div ref={divRef} className="fixed w-screen h-screen bg-black z-20 top-0 left-0 translate-y-[100%] transition-transform duration-1000"></div>

            <div className="grid">
                
            </div>
            
        </main>
    )
}