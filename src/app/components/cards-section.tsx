import Image from "next/image";

interface IProps {
    currentIndex: number
    setCurrentIndex: any
}

export default function CardsSection({ currentIndex, setCurrentIndex }: IProps) {
    return (
        <div className="fixed flex gap-8 bottom-10 right-10 select-none">
            <Image onClick={_ => setCurrentIndex(0)} draggable={false} unoptimized className={`${currentIndex == 0 ? 'hidden' : 'flex'} z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in-out duration-300 rounded-md object-cover h-[160px]`} src="/initial.jpg" width={100} height={200} alt="section 1" />
            <Image onClick={_ => setCurrentIndex(1)} draggable={false} unoptimized className={`${currentIndex == 1 ? 'hidden' : 'flex'} z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in-out duration-300 rounded-md object-cover h-[160px]`} src="/about.jpg" width={100} height={200} alt="section 2" />
            <Image onClick={_ => setCurrentIndex(2)} draggable={false} unoptimized className={`${currentIndex == 2 ? 'hidden' : 'flex'} z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in-out duration-300 rounded-md object-cover h-[160px]`} src="/projects.jpg" width={100} height={200} alt="section 3" />
            <Image onClick={_ => setCurrentIndex(3)} draggable={false} unoptimized className={`${currentIndex == 3 ? 'hidden' : 'flex'} z-20 cursor-pointer hover:scale-105 hover:shadow-[6px_6px_10px_0_rgba(255,255,255,0.4)] ease-in-out duration-300 rounded-md object-cover h-[160px]`} src="/projects.jpg" width={100} height={200} alt="section 4" />
        </div>
    )
}