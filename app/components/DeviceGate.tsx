"use client";

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { useRealDesktop } from "../hooks/useRealDesktop";

export default function DeviceGate() {
  const isDesktop = useRealDesktop();

  if (isDesktop === null) {
    return <div />;
  }

  return isDesktop ? <DesktopView /> : <MobileView />;
}
