import { useEffect } from 'react';

const handleAnim = (ref, styles) => {
  if (typeof window != 'undefined') {
    const refElmnt = ref?.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          refElmnt.classList.add(styles['active-anim']);
          return;
        }
        refElmnt.classList.remove(styles['active-anim']);
      });
    });
    if (!!refElmnt) observer.observe(refElmnt);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

const useObserverItem = (ref, styles) => {
  useEffect(() => {
    handleAnim(ref, styles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, styles, handleAnim]);
};

export { useObserverItem, handleAnim };
