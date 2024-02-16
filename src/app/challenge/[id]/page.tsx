// * providers
import HtmlContextProvider from '@/context/HtmlContextProvider';

// * types
type PageProps = { params: { id: number } };

const Challenge = ({ params: { id } }: PageProps) => {
  return (
    <main>
      <HtmlContextProvider>challenge {id}</HtmlContextProvider>
    </main>
  );
};

export default Challenge;
