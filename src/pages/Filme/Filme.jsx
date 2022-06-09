import { useEffect, useState, } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../services/Api'
import { toast } from 'react-toastify'
export function Filme() {
  const { id } = useParams()
  const navegation = useNavigate()
  const [filme, setFilmes] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: 'c879529cb175ed099303c511c453701d',
            language: 'pt-BR'
          }
        })
        .then(response => {
          setFilmes(response.data)
          setLoading(false)
        })
        .catch(() => {
          navegation('/',{replace:true})
          return;
        })
    }
    loadFilme()
    return () => {}
  }, [navegation, id ])

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeFlix')

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)
     
    if(hasFilme) {
       toast.warn('ESSE FILME JÁ ESTÁ NA LISTA!')
      return;
     }
    filmesSalvos.push(filme)
    localStorage.setItem('@primeFlix',JSON.stringify(filmesSalvos))
    toast.success('FILME SALVO COM SUCESSO!')
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-4 ">
        <h1>Carregando...</h1>
      </div>
    )
  }
  
  


  return (
    <div className="max-w-4xl m-2  snap-snap-proximity snap-y mt-4 md:w-full w-96 bg-white p-12 rounded-xl shadow-2xl shadow-black border-8 border-white">
      <h1 className="mb-4 text-center md:text-2xl text-lg font-bold block">
        {filme.title}
      </h1>
      <img
        className="snap-center md:h-auto h-56 w-auto rounded-xl  "
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3 className="md:px-3 px-1  md:mt-4 mt-1 md:mb-4 mb-2 text-start md:text-2xl text-lg font-bold block">
        Sinpse
      </h3>
      <span className="md:text-lg text-sm font-sans px-2 ">
        {filme.overview}
      </span>
      <div>
        <strong className="md:px-3 px-1 md:text-lg text-base  underline font-bold">
          avaliação: {filme.vote_average} /10
        </strong>
      </div>

      <div className="mt-6 flex flex-center justify-center  md:space-x-3 space-x-2 ">
        <button
        onClick={()=> salvarFilme()}
        className="snap-center flex items-center justify-center md:py-2 py-1 md:px-10 px-5 text-white rounded-xl md:text-lg text-sm  bg-black pointer hover:bg-zinc-800 transition-colors"
        
        >         
          Salvar
        </button>
        <button className="snap-center flex items-center justify-center md:py-2 py-1 md:px-10 px-5 text-white rounded-xl md:text-lg text-sm bg-black pointer hover:bg-zinc-800 transition-colors">
          <a target='blanck' rel='external' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  )
}
