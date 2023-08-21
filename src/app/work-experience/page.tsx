"use client";
import Particles from '@/components/particles';
import { useState, useEffect, useRef } from 'react';
import image_mountain_gray from '../../../public/images/mountain_concept/mt_gray.png';
import image_mountain_violet from '../../../public/images/mountain_concept/mt_violet.png';
import image_cloud_left from '../../../public/images/mountain_concept/cloud-left.png';
import image_cloud_right from '../../../public/images/mountain_concept/cloud-right.png';
import Image from 'next/image';
import '../../../public/css/work-experience/styles.css';

export default function Page()
{
    const ref_mountain_gray = useRef(null);
    const ref_mountain_violet = useRef<HTMLImageElement | null>(null);
    const ref_cloud_left = useRef<HTMLImageElement | null>(null);
    const ref_cloud_right = useRef<HTMLImageElement | null>(null);
    const ref_title = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        window.addEventListener('scroll', (e) => {
            if(window.scrollY < screen.height)
            {
                if(ref_cloud_left.current)
                {
                    ref_cloud_left.current.style.transform = `translateY(${(window.scrollY/screen.height*200).toFixed(2)}%)`;
                }
                if(ref_cloud_right.current)
                {
                    ref_cloud_right.current.style.transform = `translateY(${(window.scrollY/screen.height*200).toFixed(2)}%)`;
                }
                if(ref_title.current)
                {
                    ref_title.current.style.transform = `translateY(${(window.scrollY/screen.height*200).toFixed(2)}%)`;
                }
                if(ref_mountain_violet.current && screen.width > 821)
                {
                    ref_mountain_violet.current.style.transform = `translateY(-${(window.scrollY/screen.height*10).toFixed(2)}%)`
                }
            }
        });
    }
    return (<>
    <div className="overlow-x-hidden">
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-t from-black via-zinc-600/90 to-orange-200 overflow-hidden relative'>
            <Particles
                className="absolute inset-0 -z-51 animate-fade-in"
                quantity={100}
            />
            <Image src={image_mountain_gray} ref={ref_mountain_gray} alt="mt_gray" id="mountain_gray"/>
            <div className="text-center font-logotype_bold text-2xl md:text-6xl xl:text-9xl" ref={ref_title}>WORK EXPERIENCE</div>
            <Image src={image_cloud_right} ref={ref_cloud_right} alt="image_cloud_right" id="cloud_right"/>
            <Image src={image_mountain_violet} ref={ref_mountain_violet} alt="mt_violet" id="mountain_violet"/>
            <Image src={image_cloud_left} ref={ref_cloud_left} alt="image_cloud_left" id="cloud_left"/>
        </div>
        <div className="h-screen overflow-hidden"></div>
    </div>
    </>);
}