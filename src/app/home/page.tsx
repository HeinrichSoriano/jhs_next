'use client'
import Particles from "@/components/particles"
import LinkComponent from './LinkComponent';
import DescriptionCompomnent from "./DescriptionComponent";

let titles = ['FULL STACK DEVELOPER', "LET'S TURN YOUR IDEAS INTO REALITY"];
export default function Page()
{
    return (<>
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="text-2xl md:text-6xl font-logotype_bold font-bold text-center">John Heinrich Soriano</div>
        <div className="text-center font-zector text-2xl pt-4">
            <DescriptionCompomnent titles={titles}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:pt-10">
            <LinkComponent href="work-experience" text="Work Experience"/>
            <LinkComponent href="projects" text="Projects"/>
            <LinkComponent href="projects" text="Contact"/>
        </div>
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
        />
        <div>
        </div>
    </div>
    </>)
}

