// -------- begin check device 
import React from 'react';

// ------- final check 
const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
};
const viewPort = useViewport();
const isMobile = viewPort.width <= 1024;

function index() {

    return (
        <div>
              {isMobile ? <h1>Mobile layout</h1> :  <h1>Desktop layout</h1>}
        </div>
    )
}


export default useViewport;

