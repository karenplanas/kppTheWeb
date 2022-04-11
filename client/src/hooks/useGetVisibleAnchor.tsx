import { useEffect, useState } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

// https://stackoverflow.com/a/61719846
export const useGetVisibleAnchor = (ids: string[], offset = 100) => {
  const { height } = useWindowDimensions();

  const [visibleAnchor, setVisibleAnchor] = useState<string>();

  const onScroll = () => {
    ids.some((id) => {
      const element = document.getElementById(id);
      if(!element) return false;

      const top = element.getBoundingClientRect().top;
      const isVisible = top - offset >= 0 && top + offset <= height;
      
      if(isVisible) {
        setVisibleAnchor(id)
        return true
      }

      return false
    })
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  });

  return visibleAnchor;
}