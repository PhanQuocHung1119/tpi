import { useEffect } from 'react';

const handleAnim = (ref, styles, playOne = false) => {
  if (typeof window != 'undefined') {
    const refElmnt = ref?.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          refElmnt.classList.add(styles['active-anim']);
          if (playOne) observer.unobserve(entry.target);
          return;
        }
        refElmnt.classList.remove(styles['active-anim']);
      });
    });
    if (!!refElmnt) observer.observe(refElmnt);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

const useObserverItem = (ref, styles, playOne) => {
  useEffect(() => {
    handleAnim(ref, styles, playOne);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, styles, playOne, handleAnim]);
};

export { useObserverItem, handleAnim };
