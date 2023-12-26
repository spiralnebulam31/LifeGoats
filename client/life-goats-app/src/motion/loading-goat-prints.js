export const stepTopRight = {
    initial: {
        x: -5,
        opacity: 0,
    },
    animate: {
        x: 20,
        opacity: 1,
        transition: {
        duration: 0.7,
        delay: 0.3,
        },
    },
    };

    export const stepBottomRight = {
        initial: {
            x: 0,
            opacity: 0,
        },
        animate: {
            x: 30,
            opacity: 1,
            transition: {
            duration: 0.7,
            delay: 0.6,
            },
        },
        };

        
        export const stepTopLeft = {
            initial: {
                x: -25,
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: {
                duration: 0.7,
                delay: 0.6,
                },
            },
            };
        
            export const stepBottomLeft = {
                initial: {
                    x: -15,
                    opacity: 0,
                },
                animate: {
                    x: 5,
                    opacity: 1,
                    transition: {
                    duration: 0.7,
                    delay: 0.3,
                    },
                },
                };


                export const stepsRepeat = {
                    animate: {
                        transition: {
                            delay: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    },
                };
        
                
        