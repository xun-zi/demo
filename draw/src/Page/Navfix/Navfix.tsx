import { useEffect, useRef, useState } from 'react'
import './Navfix.scss'


export default function Navfix() {
    const nav = useRef<HTMLDivElement>(null);
    const [isFix, setIsFix] = useState<boolean>(false);

    useEffect(() => {
        document.onscroll = function () {
            const navEl = nav.current;
            console.log(navEl?.getBoundingClientRect().bottom);
            console.log(isFix)
            if (navEl && navEl.getBoundingClientRect().bottom < 0) {
                setIsFix(true);
            } else {
                setIsFix(false);
            }
        }
    }, [isFix]);

    return (<div className='Navfix'>
        <div className='top-Container' ref={nav}>
            <div className='Nav' style={{ position: isFix ? 'fixed' : "relative" }}>
                导航
            </div>
        </div>
    </div>)

}

