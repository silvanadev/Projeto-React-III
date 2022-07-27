import Header from "../../components/Header/Header"
import image from "../../assets/contatos.svg"
import './contatos.css'

function Contatos() {
    return(
        <>
            <Header 
                image={image} 
                description="ilustração mulher poderosa"
            >
            </Header>
            <h2 className="contatos-h2">Minhas redes</h2>
            <section className="section-contatos">
                <div className='div-contatos'>
                    <div>
                        <a className="redes-a" href="https://br.linkedin.com/in/silvana-oliveira-b9351a219" target="_blank">
                            <img 
                                src="https://cdn4.iconfinder.com/data/icons/social-media-outline-3/60/Social-35-Linkedin-Outline-512.png" 
                                alt="meu gif" 
                            />
                            <h2 className="redes-h2">Linkedin</h2>
                        </a>
                    </div>
                    <hr />
                    <div>
                        <a className="redes-a" href="https://github.com/silvanadev" target="_blank">
                            <img 
                                src="https://static.cdnlogo.com/logos/g/55/github.svg" 
                                alt="meu gif"
                            />
                            <h2 className="redes-h2">Github</h2>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contatos