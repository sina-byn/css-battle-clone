// * types
type PageProps = { params: { id: number } };

const Challenge = ({ params: { id } }: PageProps) => {
  return <div>challenge {id}</div>;
};

export default Challenge;
