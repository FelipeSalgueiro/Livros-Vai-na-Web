import livroProtagonista from "../../assets/livroProtagonista.png"
import s from "./livrosDoados.module.scss"
export default function LivrosDoados(){
    return(
        <main className={s.mainLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.listaLivros}>
                <section className={s.displayLivro}>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <p>Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
                <section className={s.displayLivro}>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <p>Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
                <section className={s.displayLivro}>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <p>Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
                <section className={s.displayLivro}>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <p>Protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </section>
                {/*Aqui entraria outro livro doado*/}
            </section>
        </main>
    )
}