import { Link } from 'react-router-dom'

export function Erro() {
  return (
    <div className='w-screen h-96 flex flex-col flex-center justify-center items-center space-y-7'>
      <h1 className='text-8xl font-bold'>404</h1>
      <h2 className='text-4xl font-bold '>pagina não encontrada!</h2>
      <Link 
      className='font-bold text-xl md:py-4 py-3 px-2 text-white rounded-2xl  bg-black pointer hover:bg-zinc-800 '
      to={'/'}>clique aqui e veja todos os filmes!</Link>
    </div>
  )
}
