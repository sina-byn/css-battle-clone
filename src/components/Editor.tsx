'use client';

// * hooks
import { useHtmlContext } from '@/context/HtmlContextProvider';

// * monaco-editor
import MonacoEditor from '@monaco-editor/react';

// * components
import Loader from './Loader';

const Editor = () => {
  const { html, setHtml } = useHtmlContext();

  const changeHandler = (value: string | undefined) => {
    value = value ?? '';
    localStorage.setItem('css-battle-html', value);
    setHtml(value);
  };

  return (
    <MonacoEditor
      value={html}
      theme='vs-dark'
      language='html'
      loading={<Loader />}
      onChange={changeHandler}
      className='w-full h-full'
      options={{ autoClosingQuotes: 'always', autoIndent: 'full' }}
    />
  );
};

export default Editor;
