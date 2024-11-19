import livroProtagonista from "../../assets/livroProtagonista.png"
export default function LivrosDoados(){
    return(
        <main>
            <h2>Livros Doados</h2>
            <section className="listaLivros">
                <section className="displayLivro">
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <p>Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
            </section>
        </main>
    )
}