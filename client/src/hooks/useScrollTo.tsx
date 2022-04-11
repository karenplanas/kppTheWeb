import { useWindowDimensions } from "./useWindowDimensions";

export const useScrollTo = () => {
  // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
  const { width } = useWindowDimensions();

  return (id: string) => {
    let yOffset = 0;
    if ( width > 750) {
      yOffset = -100; 
    } else {
      yOffset = -170;
    }
    
    const element = document.getElementById(id);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}