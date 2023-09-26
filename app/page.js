import Navbar from './components/navbar';
import Tag from './components/tag';
import ImageCarousel from './components/carroussel';
import Forms from './components/forms';
const images = [
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x400',
  'https://via.placeholder.com/800x400'];

export default function Home() {
  return (
    <main className=''>
      <Navbar/>
      <div className='m-7'>
        <ImageCarousel images={images}/>
      </div>
      <div className='flex m-5'>
        <div className='flex flex-row space-x-4'>
          <Tag/>
          <Tag/>
          <Tag/>
        </div>
      </div>
    </main>
  )
}