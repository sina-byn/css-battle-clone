'use client';

import { useState, useContext, createContext, Dispatch, SetStateAction, useEffect } from 'react';

// * context
const htmlContext = createContext<HtmlContext | null>(null);

// * helpers
import debounce from '@/helpers/debounce';

// * types
type ProviderProps = { children: React.ReactNode };

type HtmlContext = {
  html: string;
  setHtml: Dispatch<SetStateAction<string>>;
};

// * data
const defaultHtml = `<div>
welcome to css battle
</div>

<style>

</style>
`;

const HtmlContextProvider = ({ children }: ProviderProps) => {
  const [html, setHtml] = useState<string>(defaultHtml);

  const context = { html, setHtml };

  useEffect(() => {
    const storedCode = localStorage.getItem('css-battle-html');

    if (!storedCode) {
      localStorage.setItem('css-battle-html', defaultHtml);
      return;
    }

    setHtml(storedCode);

    const storageUpdateHandler = (e: StorageEvent) => {
      if (e.key !== 'css-battle-html') return;
      const storedValue = localStorage.getItem('css-battle-html');

      if (storedValue) setHtml(storedValue);
    };

    const debouncedStorageUpdateHandler = debounce(storageUpdateHandler, 500);

    window.addEventListener('storage', debouncedStorageUpdateHandler);

    return () => window.removeEventListener('storage', debouncedStorageUpdateHandler);
  }, []);

  return <htmlContext.Provider value={context}>{children}</htmlContext.Provider>;
};

export const useHtmlContext = () => useContext(htmlContext)!;

export default HtmlContextProvider;
