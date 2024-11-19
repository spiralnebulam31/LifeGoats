import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocoScroll = (start) => {
    useEffect(() => {
        if (!start) {
            return;
        }

        const scrollElement = document.querySelector('#loco-scroll-container');
        const locoScroll = new LocomotiveScroll({
            el: scrollElement,
            smooth: true,
            lerp: 0.1,
            multiplier: 1,
            class: 'is-reveal',
        });
            

    }, [start])
}

export default useLocoScroll;
