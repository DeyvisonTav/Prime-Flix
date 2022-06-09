import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeFlix')
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function handleDeleteFilmes(id) {
     let filtroFilmes = filmes.filter((item)=>{
       return (item.id !== id)
     })
     setFilmes(filtroFilmes)
     localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes))
     toast.success('FILME REMOVIDO COM SUCESSO')  
  } 

  return (
    <div className="max-w-5xl  snap-snap-proximity snap-y mt-20 md:w-full w-96 bg-white md:p-12 p-5 rounded-xl shadow-2xl shadow-black border-8 border-white">
      <h1 className="m-2 mb-10 text-center md:text-4xl text-lg font-bold ">Meus Filmes</h1>
       {filmes.length === 0 && <span className='flex flex-center justify-center md:text-xl text-base text-center'>Você não possui nenhum filme salvo...   <div className='flex flex-center justify-center items-center'> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clip-rule="evenodd" />
</svg></div> </span>}
      <ul >
        {filmes.map(item => {
          return (
            <li 
            className='flex justify-between'
            key={item.id}>
              <span className='md:text-xl text-base text-center md:mt-11 mt-14 '>{item.title}</span>
              <div className=' mt-10 flex space-x-4'>
              <div className=' flex flex-col space-y-2'>
                <Link 
                 className="snap-center flex items-center justify-center  py-1 md:px-6 px-5 text-black underline md:text-lg text-sm   pointer hover:text-zinc-500 font-bold transition-colors"
                to={`/filme/${item.id}`}>Ver detalhes</Link>
            
              <button
              onClick={() => handleDeleteFilmes(item.id)} 
              className="snap-center flex items-center justify-center py-1 md:px-6 px-5 text-white rounded-xl md:text-lg text-sm  bg-black pointer hover:bg-zinc-800 transition-colors">Excluir</button>
              </div>
              </div>
            
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}
