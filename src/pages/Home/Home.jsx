import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/Api'



// /movie/now_playing?api_key=c879529cb175ed099303c511c453701d&language=pt-BR
export function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: 'c879529cb175ed099303c511c453701d',
          language: 'pt-BR',
          page: 1
        }
      })
      // console.log(response.data.results.slice(0,10))
      setFilmes(response.data.results.slice(0, 10))
    }
    loadFilmes()
    setLoading(false)
   
  }, [])
  
 
  if(loading) {
    return (
      <div className='flex justify-center items-center mt-4 '>
        <h2 className=' flex flex-center items-center font-bold text-xl'>  carregando filme...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-4xl m-4 mx-auto">
        {filmes.map(filme => {
          return (
            <article
              className=" mt-4 md:w-full w-80 bg-white p-12 rounded-xl shadow-2xl shadow-black border-8 border-white"
              key={filme.id}
            >
              <strong className="mb-4 text-center md:text-2xl text-lg font-bold block">
                {filme.title}
              </strong>
              <img
                className="w-auto rounded-xl rounded-b-none "
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link
                className="flex items-center justify-center md:py-4 py-1 text-white rounded-xl rounded-t-none bg-black pointer hover:bg-zinc-800"
                to={`/filme/${filme.id}`}
              >
                Acessar
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
