'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import { LangProvider } from './context/LangContext';

function SmoothScrollWrapper({ children, lang }: { children: ReactNode; lang: string }) {
  return (
    <LangProvider lang={lang}>
      <ReactLenis root>{children}</ReactLenis>
    </LangProvider>
  );
}

export default SmoothScrollWrapper;