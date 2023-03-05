import Image from 'next/image';

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const { title, release_date, runtime, status, backdrop_path, overview } = res;
  const imagePath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div>
      <h2 className='text-2xl'>{title}</h2>
      <h2 className='text-lg'>{release_date}</h2>
      <h2>Runtime: {runtime} minutes</h2>
      <h2 className='text-sm bg-green-600 inline-block px-4 py-1 rounded-md'>
        {status}
      </h2>
      <Image
        className='my-12 w-full'
        src={imagePath}
        height={1000}
        width={1000}
        alt={title}
        priority
      />
      <h2>{overview}</h2>
    </div>
  );
}
