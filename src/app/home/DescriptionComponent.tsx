`use client`;
import { useState, useEffect } from "react";
import styles from './styles.module.css';

interface propTypes {
    titles: any;
}
const DescriptionCompomnent:React.FC<propTypes> = ({titles}) => {
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

export default DescriptionCompomnent;