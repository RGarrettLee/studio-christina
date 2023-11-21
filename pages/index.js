import ImageWall from '../components/imageWall';

export default function Home() {
  return (
    <div className='flex flex-col items-center mb-24'>
        <h1 className='text-2xl font-playfair px-8 py-2 text-red-400 border-red-400 border-2 mt-12 lg:mt-24 mb-12'>christina lee</h1>
        <hr className='block mt-0.5 mb-0.5 mx-auto border border-red-400 w-3/4 lg:w-1/2' />
        <div className='flex flex-col items-center my-4'>
          <ImageWall></ImageWall>
        </div>
    </div>
  )
}
