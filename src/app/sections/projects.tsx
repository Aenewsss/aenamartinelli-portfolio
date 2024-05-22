import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function ProjectsSection() {

    const router = useRouter()
    
    const divRef = useRef<HTMLDivElement>(null)

    function showTransitionAnimation(){
        divRef.current!.style.transform = 'translateY(0)'
        setTimeout(() => {
            router.push('/projects')
        }, 1000);
    }
    
    return (
        <section className="flex flex-col items-center justify-center text-white ">
            <h1 className="md:text-8xl text-6xl font-bold mb-2 animation-to-top text-center">Projetos que faço parte</h1>
            <div className="group">
                <button onClick={showTransitionAnimation} className="bg-amber-400 text-black md:text-xl text-lg p-2 rounded-md mt-4 hover:scale-105">Clique para conhecer</button>
                <div ref={divRef} className="fixed w-screen h-screen bg-black z-20 top-0 left-0 translate-y-[-100%] transition-transform duration-1000"></div>
            </div>
        </section>
    )
}