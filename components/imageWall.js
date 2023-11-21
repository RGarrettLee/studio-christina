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
         await supabase.from('images').select('url, order')
            .then((response) => {
               let order = response.data.filter((data) => {
                  return data.order;
               });

               let unordered = response.data.filter((data) => {
                  return !data.order;
               });

               setImages([...[].concat(order, unordered)]);
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
         <div className='grid grid-flow-row grid-cols-2 lg:grid-cols-3 px-12 lg:px-0 sm:w-full lg:w-5/6'>
            {images.map((image, index) => (
               <div className='break-inside-avoid-column' key={index}>
                  <img onClick={() => enlargeImage(image)} className='scale-100 lg:scale-75 lg:hover:scale-100 duration-300 transition-transform px-2 py-4' src={image.url} />
               </div>
            ))}
         </div>
         <EnlargedImage isOpen={isEnlarged} setIsOpen={setIsEnlarged} image={img} />
      </div>
   )
}
// columns-2 lg:columns-3