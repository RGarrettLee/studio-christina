import { useState, useEffect } from 'react';
import EnlargedImage from '../components/enlargedImage';
import Image from 'next/image';
import supabase from '../db/connection';

export default function ImageWall() {
   const [images, setImages] = useState([]);
   const [isEnlarged, setIsEnlarged] = useState(false);
   const [img, setImg] = useState('');

   useEffect(() => {
      async function getImages() {
         await supabase.from('images').select('url, order, tags, height, width')
            .then((response) => {
               response.data.sort((a, b) => a.order - b.order);
               setImages([...response.data]);
            })
      }

      getImages();
   }, [])

   function enlargeImage(image) {
      setImg(image)
      setIsEnlarged(true);
   }

   return (
      <div className='flex flex-col items-center'>
         <div className='grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-12 2xl:px-0 sm:w-full lg:w-5/6'>
            {images.map((image, index) => (
               <div className='break-inside-avoid-column' key={index}>
                  <Image onClick={() => enlargeImage(image)} className='scale-100 xl:scale-75 2xl:hover:scale-100 duration-300 transition-transform px-2 py-4 select-none' src={image.url} alt={index} width={image.width} height={image.height} priority={true} placeholder='blur' />
               </div>
            ))}
         </div>
         <EnlargedImage isOpen={isEnlarged} setIsOpen={setIsEnlarged} image={img} />
      </div>
   )
}
// columns-2 lg:columns-3
// <img onClick={() => enlargeImage(image)} className='scale-100 xl:scale-75 2xl:hover:scale-100 duration-300 transition-transform px-2 py-4' src={image.url} />
// <Image onClick={() => enlargeImage(image)} className='scale-100 xl:scale-75 2xl:hover:scale-100 duration-300 transition-transform px-2 py-4' src={image.url} alt={index} width={image.width} height={image.height} blurDataURL={image.url} placeholder='blur' />