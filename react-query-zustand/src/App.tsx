import { useState } from "react";
import Card from "./components/Card";
import { Repository } from "./hooks/types";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const [userName, setUserName] = useState('')
  const { data, isLoading } = useFetchRepositories(userName);
  console.log(data);
  const favoriteRepos = useFavoriteReposStore(
    (state) => state.favoriteReposIds
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza acciones adicionales con los datos del formulario
    setUserName(event.target.userName.value);
    console.log({ userName });
  };



  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* {data?.map((repository: Repository) => (
        <Card
          repository={repository}
          key={repository.id}
          isFavorite={favoriteRepos.includes(repository.id)}
        />
      ))} */}
      <div>Bienvenidos
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Ingresa un usuario de GitHub"
            />
            <button onClick={() => {
             handleSubmit
            }
            }>Enviar</button>
          </form>
        </div>
      </div>
      {Array.isArray(data) &&
        data.map((repository: Repository) => (
          <Card
            repository={repository}
            key={repository.id}
            isFavorite={favoriteRepos.includes(repository.id)}
          />
        ))}
    </div>
  );
}

export default App;