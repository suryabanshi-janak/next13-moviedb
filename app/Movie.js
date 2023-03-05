import Image from 'next/image';
import Link from 'next/link';

export default function Movie(props) {
  const { id, title, release_date, poster_path } = props;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`${id}`}>
        <Image src={posterPath} width={500} height={500} alt={title} />
      </Link>
    </div>
  );
}
