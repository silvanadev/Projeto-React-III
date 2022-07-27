import { useState, useEffect } from "react"
import Header from "../../components/Header/Header";
import image from "../../assets/portifolio.svg";
import List from "./List";
import { BsArrowReturnRight } from "react-icons/bs";
import axios from "axios"

import "./portifolio.css";

function Portifolio() {
    const [repos, setRepos] = useState([])
    const baseURL = 'https://api.github.com/users/silvanadev/repos'

    useEffect(()=> {
        axios.get(baseURL).then((response) => setRepos(response.data))
    }, [])

  return (
    <>
      <Header image={image} description="ilustração mulher com universo">
      </Header>
      <div>
        <h2 className="portifolio-h2">Meus Projetos</h2>
      </div>
      <div className="cartao-container">
        {List.map((projeto) => {
          return (
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img className="cartao-img"
                src={projeto.imagem}
                alt={"gif do projeto " + projeto.nome}
              />
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight size={16} color="black" />
              </a>
            </div>
          );
        })}
      </div>

      <h2 className="titulo">Outros Projetos no meu Github</h2>

      <div className="card-container">
        {
            repos.map(repo => {
                return(
                    <div className="card" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p className="description" >{repo.description}</p>
                        <a href={repo.html_url} className="enter-repo" target="_blank">
                            <BsArrowReturnRight size={16} color="#FFF" />
                        </a>
                    </div>
                )
            })
        }
      </div>
    </>
  );
}

export default Portifolio;