import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = (p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);
    };

    p.draw = () => {
        p.fill(255);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
};

const P5Wrapper = () => {
    const sketchRef = useRef();

    useEffect(() => {
        new p5(Sketch, sketchRef.current);

        return () => {
            sketchRef.current.removeChild(sketchRef.current.childNodes[0]);
        };
    }, []);

    return <div ref={sketchRef}></div>;
};

export default dynamic(() => Promise.resolve(P5Wrapper), {
    ssr: false
});