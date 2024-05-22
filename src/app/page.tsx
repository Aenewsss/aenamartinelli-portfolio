'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline"
import PresentationSection from "./sections/presentation";
import StackSection from "./sections/stack";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIconRef = useRef<SVGSVGElement>(null)
  const nextIconRef = useRef<SVGSVGElement>(null)

  const imageContainerRef = useRef<HTMLElement>(null);

  const listRef = useRef<HTMLUListElement>(null);

  const getIconDeg = () => Number(prevIconRef.current?.style.transform.replace('rotate(', '').replace('deg)', ''))

  const getImageContainerTranslateX = () => Number(imageContainerRef.current?.style.transform.replace('translateX(', '').replace('px)', ''))

  const getListTranslateY = () => Number(listRef.current?.style.transform.replace('translateY(', '').replace('px)', ''))

  function prevSection() {
    if (currentIndex == 0) return

    const deg = getIconDeg() - 90

    prevIconRef.current!.style.transform = `rotate(${deg}deg)`
    nextIconRef.current!.style.transform = `rotate(${deg}deg)`

    setCurrentIndex(currentIndex - 1)

    const containerWidth = imageContainerRef.current?.clientWidth!;

    const translateX = getImageContainerTranslateX() + containerWidth
    imageContainerRef.current!.style.transform = `translateX(${translateX}px)`;

    const translateY = getListTranslateY() + 28
    listRef.current!.style.transform = `translateY(${translateY}px)`;
  }

  function nextSection() {
    if (currentIndex == 3) return

    const deg = getIconDeg() + 90

    prevIconRef.current!.style.transform = `rotate(${deg}deg)`
    nextIconRef.current!.style.transform = `rotate(${deg}deg)`

    setCurrentIndex(currentIndex + 1)

    const containerWidth = imageContainerRef.current?.clientWidth!;

    const translateX = getImageContainerTranslateX() ? getImageContainerTranslateX() - containerWidth : -containerWidth

    imageContainerRef.current!.style.transform = `translateX(${translateX}px)`;

    const translateY = getListTranslateY() ? getListTranslateY() - 28 : -28
    listRef.current!.style.transform = `translateY(${translateY}px)`;

  }

  function renderSection() {
    switch (currentIndex) {
      case 0: return <PresentationSection />
      case 1: return <StackSection />
      case 2: return <ProjectsSection />
      case 3: return <ContactSection />
    }
  }


  return (
    <main className="flex justify-center">
      <section className={`absolute w-screen h-screen flex transition-transform duration-500`} ref={imageContainerRef}>
        <Image priority className={`object-cover flex-shrink-0 w-full h-full opacity-50 transition duration-500 ease-in-out`} unoptimized src="/initial.webp" alt="Imagem de fundo 1" width={300} height={300} />
        <Image className={`object-cover flex-shrink-0 w-full h-full opacity-50 transition duration-500 ease-in-out`} unoptimized src="/stack.webp" alt="Imagem de fundo 2" width={300} height={300} />
        <Image className={`object-cover flex-shrink-0 w-full h-full opacity-40 transition duration-500 ease-in-out`} unoptimized src="/projects.webp" alt="Imagem de fundo 3" width={300} height={300} />
        <Image className={`object-cover flex-shrink-0 w-full h-full opacity-40 transition duration-500 ease-in-out`} unoptimized src="/contact.webp" alt="Imagem de fundo 4" width={300} height={300} />
      </section>

      <section className="container mx-auto relative flex items-center justify-center h-screen">
        <PlusIcon ref={prevIconRef} onClick={prevSection} width={50} height={50} className="absolute z-20 cursor-pointer ease-linear duration-200 left-0" />
        <PlusIcon ref={nextIconRef} onClick={nextSection} width={50} height={50} className="absolute z-20 cursor-pointer ease-linear duration-200 right-0" />
        {renderSection()}
      </section>

      <Image unoptimized className="md:w-[60px] w-8 fixed top-4 left-4" src="/icons/my-logo.png" width={60} height={60} alt="Minha logo" />
      <Image unoptimized className="md:w-[60px] w-8 fixed bottom-4 right-4" src="/icons/my-logo.png" width={60} height={60} alt="Minha logo" />

      <div className="fixed bottom-10 overflow-hidden flex h-6">
        <ul ref={listRef} className="md:text-xl text-lg list-none transition-transform duration-1000">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <h3 className="md:text-xl text-lg">&nbsp;-&nbsp;4</h3>
      </div>

    </main>
  );
}
