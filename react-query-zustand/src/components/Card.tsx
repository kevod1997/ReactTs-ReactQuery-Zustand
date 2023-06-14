import { Repository } from "../hooks/types"
import { useFavoriteReposStore } from "../store/favoriteRepos"

type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

function Card({repository, isFavorite}: CardProps) {

  const addFavoriteRepo =  useFavoriteReposStore(state => state.addFavoriteRepo)
  const removeFavoriteRepo =  useFavoriteReposStore(state => state.removeFavoriteRepo)

  const handleFavorite = () => {
    if (isFavorite) {
        removeFavoriteRepo(repository.id)
        return
    }
        addFavoriteRepo(repository.id)
    }

  return (
    <div>
         <h2>{repository.name}</h2>
         <button onClick={()=>{
                handleFavorite()
         }}>
            { 
            isFavorite ? 'Remove from favorites' : 'Add to favorites'
            }
         </button>
    </div>
  )
}

export default Card