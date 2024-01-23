import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';

const Tilt = ({ children }) => {
    useEffect(() => {
        // Select the element to which you want to apply the tilt effect
        const element = children.ref.current;
    
        // Apply "vanilla-tilt"
        VanillaTilt.init(element, {
          max: 15, // Maximum tilt angle
          speed: 8000, // Transition speed
          glare: false, // Add glare effect to the element
        });
    
        // Clean up the initialization when the component is unmounted
        return () => {
            element.vanillaTilt.destroy();
        };
    }, []);

    // Pass along the children as-is
    return children;
}

export default Tilt;
