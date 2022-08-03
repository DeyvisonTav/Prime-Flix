import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div >
      <div 
      
      className='flex items-center justify-around w-screen h-16 bg-black  '>
        <Link 
        className='text-white text-4xl pointer font-bold'
        to={'/'}>primeFlix</Link>
        <Link
        className='pointer bg-white py-1 px-3 rounded-xl text-black font-semibold'
        to={'/favoritos'}>Meus filmes</Link>
      </div>
    </div>
  )
}
