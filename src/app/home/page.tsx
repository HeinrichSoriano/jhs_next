'use client'
import Particles from "@/components/particles"
import LinkComponent from './LinkComponent';
import DescriptionCompomnent from "./DescriptionComponent";
import { useEffect, useState } from "react";
import '../../../public/css/home/styles.css';

export default function Page()
{
    const [titles, set_titles] = useState([]);
    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        let element = document.getElementById('title_container');
        element?.classList.add('show-up');
        
        await setTimeout(() => {
            element = document.getElementById('description_container');
            element?.classList.add('show');
            set_titles(['FULL STACK DEVELOPER', "LET'S TURN YOUR IDEAS INTO REALITY"]);
        }, 2000);

        await setTimeout(() => {
            element = document.getElementById('link_container');
            element?.classList.add('show-up');
        }, 1000);
    }

    return (<>
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="flex flex-col items-center justify-center w-100%">
            <div className="text-2xl md:text-6xl font-logotype_bold font-bold text-center" id="title_container">John Heinrich Soriano</div>
            <div className="text-center font-zector text-2xl pt-4" id="description_container">
                <DescriptionCompomnent titles={titles}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:pt-10" id="link_container">
                <LinkComponent href="work-experience" text="Work Experience"/>
                <LinkComponent href="projects" text="Projects"/>
                <LinkComponent href="projects" text="Contact"/>
            </div>
        </div>
        
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
        />
    </div>
    </>)
}

