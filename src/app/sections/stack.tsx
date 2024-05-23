import Image from "next/image";

export default function StackSection() {
    return (
        <section className="flex flex-col items-center justify-center text-white gap-8 md:p-20 p-12">
            <div className="text-center">
                <h1 className="md:text-8xl text-6xl font-bold mb-2 animation-to-top">Minhas Stacks</h1>
                <p className="md:text-xl text-lg animation-to-top ">Essas são as tecnologias que uso no meu dia a dia e/ou tenho afinidade</p>
            </div>
            <div className="flex flex-wrap md:gap-8 gap-4 justify-center">
                <div className="animation-to-top opacity-0 cursor-pointer transition-all group relative flex justify-center">
                    <Image className="md:w-[60px] w-8 group-hover:translate-y-[-4px] group-hover:scale-110" src="/stacks/angularjs-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">angularjs</span>
                </div>
                <div className="animation-to-top animation-delay-1 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-cloudfront-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-2 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-cloudwatch-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-3 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-codedeploy-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-4 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-cognito-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-5 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-dynamodb-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-6 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-ec2-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-7 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-iam-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-8 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-rds-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-9 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-route53-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-10 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/aws-s3-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">aws</span>
                </div>
                <div className="animation-to-top animation-delay-11 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/django-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">django</span>
                </div>
                <div className="animation-to-top animation-delay-12 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/docker-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">docker</span>
                </div>
                <div className="animation-to-top animation-delay-13 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/figma-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">figma</span>
                </div>
                <div className="animation-to-top animation-delay-14 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/firebase-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">firebase</span>
                </div>
                <div className="animation-to-top animation-delay-15 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/git-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">git</span>
                </div>
                <div className="animation-to-top animation-delay-16 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/linux-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">linux</span>
                </div>
                <div className="animation-to-top animation-delay-17 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/mongodb-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">mongodb</span>
                </div>
                <div className="animation-to-top animation-delay-18 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/mysql-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">mysql</span>
                </div>
                <div className="animation-to-top animation-delay-19 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/nestjs-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">nestjs</span>
                </div>
                <div className="animation-to-top animation-delay-20 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/nextjs-fill-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">nextjs</span>
                </div>
                <div className="animation-to-top animation-delay-21 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/node-16-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">node</span>
                </div>
                <div className="animation-to-top animation-delay-22 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/postgresql-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">postgresql</span>
                </div>
                <div className="animation-to-top animation-delay-23 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/react-native-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">react</span>
                </div>
                <div className="animation-to-top animation-delay-24 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/react-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">react</span>
                </div>
                <div className="animation-to-top animation-delay-25 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/redis-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">redis</span>
                </div>
                <div className="animation-to-top animation-delay-26 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/redux-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">redux</span>
                </div>
                <div className="animation-to-top animation-delay-27 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/stripe-v2-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">stripe</span>
                </div>
                <div className="animation-to-top animation-delay-28 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/swagger-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">swagger</span>
                </div>
                <div className="animation-to-top animation-delay-29 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/tailwind-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">tailwind</span>
                </div>
                <div className="animation-to-top animation-delay-30 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/typescript-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">typescript</span>
                </div>
                <div className="animation-to-top animation-delay-31 opacity-0 cursor-pointer transition-all hover:translate-y-[-4px] hover:scale-110 group relative flex justify-center">
                    <Image className="md:w-[60px] w-8" src="/stacks/bootstrap-svgrepo-com.svg" width={60} height={60} alt="" />
                    <span className="-bottom-6 absolute opacity-0 group-hover:opacity-100 transition-all">bootstrap</span>
                </div>
            </div>
        </section>
    )
}