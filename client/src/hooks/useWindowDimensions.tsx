import { useEffect, useState } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {  
  const [windowDimenstions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(()=>{
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return windowDimenstions;
}

export { useWindowDimensions }