"use client"
import {HeroUIProvider} from "@heroui/react";

function HeroUiProvider({children}) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}

export default HeroUiProvider