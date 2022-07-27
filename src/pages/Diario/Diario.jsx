import Header from "../../components/Header/Header"
import Capitulo from "../../components/Capitulo/Capitulo"
import image from "../../assets/diary.svg"
import "./diario.css"

function Diario() {
    return(
        <>
            <Header 
                image={image} 
                description="ilustração mulher escrevendo no diário"
            >
            </Header>
            <h2 className="diario-h2" >4 coisas que aprendi...</h2>
            <Capitulo 
                title="Git"
                image="https://i.gifer.com/Jdy.gif"
                alt="Gif sapinho Sith"
                text="As tags são usadas para informar ao navegador a estrutura do site, ou seja, quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página. A principal característica das tags é estarem sempre dentro dos sinais de chevron sinal de “maior que” e “menor que”. Além disso, uma mesma tag pode receber um ou mais atributos, que possuirá um valor que modifica sua estrutura ou funcionalidade."
            />
            <Capitulo 
                title="Tags HTML"
                image="https://i.pinimg.com/originals/17/fb/2c/17fb2c462c979367341c3265d65a0952.gif"
                alt="Gif sapinho com xícara de chá"
                text="As tags são usadas para informar ao navegador a estrutura do site, ou seja, quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página. A principal característica das tags é estarem sempre dentro dos sinais de chevron sinal de “maior que” e “menor que”. Além disso, uma mesma tag pode receber um ou mais atributos, que possuirá um valor que modifica sua estrutura ou funcionalidade."
            />
            <Capitulo 
                title="Mobile First"
                image="https://64.media.tumblr.com/38412b4efcdef0e5c7214a07dc470dc9/71f3543937375db0-2a/s540x810/951cd0a0f238188582f90301c86de3d735e2888b.gifv"
                alt="Gif sapinho vaquinha e boizinho dançando felizes"
                text="Mobile First é um conceito aplicado em projetos web onde o foco inicial da arquitetura e desenvolvimento é direcionado aos dispositivos móveis e em seguida para os desktops. Em projetos web de uma forma geral o foco precisa ser no usuário para que ele tenha a melhor experiência possível e cumpra sua missão no website.Quando projetamos primeiramente para mobile somos forçados a sermos sucintos e fazer uso da melhor maneira dos poucos espaços disponíveis nas telas dos dispositivos móveis e auxiliar os usuários a realizarem suas desejadas tarefas."
            />
            <Capitulo 
                title="JavaScript"
                image="https://c.tenor.com/1tPeLb2e7sQAAAAC/kermit-frog.gif"
                alt="Gif sapinho com medo"
                text="JavaScript é uma linguagem de programação interpretada. Foi originalmente implementada como parte dos navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário sem a necessidade deste script passar pelo servidor, controlando o navegador, realizando comunicação assíncrona e alterando o conteúdo do documento exibido. Sendo assim, o código JavaScript nos permite tornar uma página mais dinâmica, respondendo a interações do usuário. A sintaxe, bastante parecida com outras linguagens e muito intuitiva, facilita o aprendizado e utilização."
            />
        </>
    )
}

export default Diario