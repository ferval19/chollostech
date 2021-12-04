export default function ProductTitle({ title }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left">
      {title}
    </h1>
  );
}
