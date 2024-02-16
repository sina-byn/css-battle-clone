// * providers
import HtmlContextProvider from '@/context/HtmlContextProvider';

// * types
type PageProps = { params: { id: number } };

export const generateMetadata = ({ params: { id } }: PageProps) => {
  return { title: `challenge no.${id}` };
};

const Challenge = ({ params: { id } }: PageProps) => {
  return (
    <main>
      <HtmlContextProvider>challenge {id}</HtmlContextProvider>
    </main>
  );
};

export default Challenge;
