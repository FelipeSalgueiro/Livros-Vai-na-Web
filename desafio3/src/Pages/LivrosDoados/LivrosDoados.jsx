import livroProtagonista from "../../assets/livroProtagonista.png"
import s from "./livrosDoados.module.scss"
export default function LivrosDoados(){
    return(
        <main className={s.mainLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.listaLivros}>
                <section>
                    <img src={livroProtagonista} alt="Imagem meramente ilustrativa do livro Protagonista."/>
                    <div>
                        <h3>Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                {/*Aqui entraria outro livro doado*/}
            </section>
        </main>
    )
}