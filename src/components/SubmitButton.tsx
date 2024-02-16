'use client';

// * hooks
import { useHtmlContext } from '@/context/HtmlContextProvider';

const SubmitButton = () => {
  const { html } = useHtmlContext();

  const clickHandler = async () => {
    const res = await fetch('/api/challenge?id=1', {
      method: 'POST',
      body: JSON.stringify({ html }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <button
      type='button'
      onClick={clickHandler}
      className='w-full bg-orange-500 hover:bg-orange-600 rounded-md p-2 mt-10'
    >
      Submit
    </button>
  );
};

export default SubmitButton;
