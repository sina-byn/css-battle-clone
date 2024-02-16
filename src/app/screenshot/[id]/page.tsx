// * components
import Image from '@/components/Image';

// * types
type PageProps = { params: { id: number } };

export const metadata = { title: 'challenge screenshot' };

const Screenshot = ({ params: { id } }: PageProps) => {
  return (
    <main className='flex flex-wrap gap-4 p-4'>
      <div className='box'>
        <iframe className='output w-full h-full bg-white pointer-events-none' />
      </div>
      <Image id={id} className='base' />
    </main>
  );
};

export default Screenshot;
