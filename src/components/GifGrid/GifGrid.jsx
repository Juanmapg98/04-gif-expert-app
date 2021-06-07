import { useFetchGifs } from '../../hooks/useFetchGifs.js';
import { GifGridItem } from '../GifGridItem/GifGridItem.jsx';
import './GifGrid.css';
export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p> }
      <div className='card-grid'>
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
