import NextImage from 'next/image';
import clsx from 'clsx';

// * types
type ImageProps = {
  id: number;
  className?: string;
};

const Image = ({ id, className }: ImageProps) => {
  const src = `/challenges/${id}.png`;

  return (
    <div className='image-box box'>
      <NextImage
        priority
        src={src}
        width={400}
        height={300}
        quality={100}
        alt='challenge image'
        className={clsx('image', className)}
      />
    </div>
  );
};

export default Image;
