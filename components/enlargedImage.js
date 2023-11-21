import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function EnlargedImage({ isOpen, setIsOpen, image }) { 
   return (
      <Dialog className='relative z-50' open={isOpen} onClose={() => setIsOpen(false)}>
         <div className='fixed inset-0 bg-black/75'>
            <div className='fixed inset-0 flex w-auto items-center justify-center p-4'>
               <Dialog.Panel className='w-3/5 lg:w-full max-w-screen-sm lg:max-w-sm rounded bg-transparent'>
                  <div className='flex flex-col items-center'>
                     <img className='scale-150' src={image.url} alt={image.desc}></img>
                  </div>
               </Dialog.Panel>
            </div>
         </div>
      </Dialog>
   )
}

// <p className='text-white text-lg lg:text-2xl font-playfair scale-150'>description/name of the art</p> mt-24 lg:mt-36  mb-24 lg:mb-36 
