'use client'
import Particles from "@/components/particles"
import { useState, useEffect } from "react";
import styles from './styles.module.css';
export default function Page()
{
    const titles = ['FULL STACK DEVELOPER', 'TEAM LEADER'];

    return (<>
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="text-6xl font-zector font-bold text-center">John Heinrich Soriano</div>
        <div className="text-center font-zector text-2xl">
            <Description/>
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

const titles = ['FULL STACK DEVELOPER', 'STRONG CONTRIBUTOR', 'INTERIM TECH LEAD'];
const Description = () => {
    const [title, set_title] = useState('');

    let TypingInterval:any = null;

    useEffect(() => {
        setTypingTitle();

        return () => {
            clearInterval(TypingInterval);
        };
    }, []);

    const setTypingTitle = (arr_index = 0) => {
        let value = titles[arr_index];
        let index = 0;
        TypingInterval = setInterval(() => {
            set_title(value.slice(0, index));
            index++;
            if(index > value.length) {
                clearInterval(TypingInterval);
                setUntypeTitle(arr_index);
            }
        }, 100);
    }

    const setUntypeTitle = (arr_index = 0) => 
    {
        let value = titles[arr_index];
        setTimeout(() => {
            TypingInterval = setInterval(() => {
                value = value.slice(0, -1);
                set_title(value);
                if(!value)
                {
                    clearInterval(TypingInterval);
                    arr_index++;
                    let next_word_index = (titles[arr_index] != undefined) ? arr_index : 0;
                    setTypingTitle(next_word_index);
                }
            }, 100)
        }, 2000);
    }

    return (<>{title}<span className={styles.pulsing_cursor}>|</span></>);
}