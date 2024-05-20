'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { PlusIcon } from "@heroicons/react/24/outline"

export default function Home() {

  const ref1 = useRef<HTMLImageElement>(null)
  const ref2 = useRef<HTMLImageElement>(null)
  const ref3 = useRef<HTMLImageElement>(null)

  const prevIconRef = useRef<SVGSVGElement>(null)
  const nextIconRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    function clickListener(this: HTMLElement, event: any) {
      document.querySelectorAll('.section-active').forEach(el => {
        if (el != event.currentTarget) {
          el.classList.remove('section-active')
        }
      })

      event.currentTarget.classList.add('section-active')
    }

    ref1.current?.addEventListener('click', clickListener)
    ref2.current?.addEventListener('click', clickListener)
    ref3.current?.addEventListener('click', clickListener)
  }, []);

  let deg = 0

  function prevSection() {
    const sections = getSections()

    deg += 90

    prevIconRef.current!.style.transform = `rotate(-${deg}deg)`
    nextIconRef.current!.style.transform = `rotate(-${deg}deg)`

    if (sections[0].classList.contains('section-active')) {
      sections[0].classList.remove('section-active')
      sections[sections.length - 1].classList.add('section-active')
      return
    }

    const index = Array.from(sections).findIndex(el => el.classList.contains('section-active'))

    sections[index].classList.remove('section-active')
    sections[index - 1].classList.add('section-active')
  }

  function nextSection() {
    const sections = getSections()

    deg += 90
    
    prevIconRef.current!.style.transform = `rotate(${deg}deg)`
    nextIconRef.current!.style.transform = `rotate(${deg}deg)`
    
    if (sections[sections.length - 1].classList.contains('section-active')) {
      sections[sections.length - 1].classList.remove('section-active')
      sections[0].classList.add('section-active')
      return
    }

    const index = Array.from(sections).findIndex(el => el.classList.contains('section-active'))

    sections[index].classList.remove('section-active')
    sections[index + 1].classList.add('section-active')
  }

  const getSections = () => document.querySelectorAll('.section')

  return (
    <main>
      <section className="container mx-auto relative flex items-center justify-center h-screen">
        <PlusIcon ref={prevIconRef} onClick={prevSection} width={40} height={40} className="absolute z-20 cursor-pointer ease-linear duration-200 left-10" />
        <PlusIcon ref={nextIconRef} onClick={nextSection} width={40} height={40} className="absolute z-20 cursor-pointer ease-linear duration-200 right-10" />
      </section>
      <div className="fixed flex gap-8 bottom-20 right-10">
        <Image draggable={false} ref={ref1} unoptimized className="section section-active z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in duration-200 rounded-md object-cover h-[200px]" src="/initial.jpg" width={120} height={200} alt="section 1" />
        <Image draggable={false} ref={ref2} unoptimized className="section z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in duration-200 rounded-md object-cover h-[200px]" src="/about.jpg" width={120} height={200} alt="section 1" />
        <Image draggable={false} ref={ref3} unoptimized className="section z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in duration-200 rounded-md object-cover h-[200px]" src="/projects.jpg" width={120} height={200} alt="section 1" />
      </div>
    </main>
  );
}
