"use client";

import { useEffect, useState } from "react";

export function useRealDesktop(): boolean | null {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const hoverCapable = window.matchMedia("(hover: hover)").matches;
    const noTouch = navigator.maxTouchPoints === 0;

    setIsDesktop(finePointer && hoverCapable && noTouch);
  }, []);

  return isDesktop;
}
