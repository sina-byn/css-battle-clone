// * providers
import HtmlContextProvider from '@/context/HtmlContextProvider';

// * components
import Image from '@/components/Image';
import Iframe from '@/components/Iframe';
import Editor from '@/components/Editor';
import SubmitButton from '@/app/SubmitButton';
import CompareSlider from '@/components/CompareSlider';

// * types
type PageProps = { params: { id: number } };

export const generateMetadata = ({ params: { id } }: PageProps) => {
  return { title: `challenge no.${id}` };
};

const Challenge = ({ params: { id } }: PageProps) => {
  return (
    <main className='container grid grid-cols-[auto,_450px,_450px] justify-items-center min-w-[1440px] h-full text-gray-200 mx-auto pt-10'>
      <HtmlContextProvider>
        <Editor />
        <CompareSlider items={[<Iframe key='iframe' />, <Image id={id} key='image' />]} />
        <div>
          <Image id={id} className='base' />
          <SubmitButton />
        </div>
      </HtmlContextProvider>
    </main>
  );
};

export default Challenge;
