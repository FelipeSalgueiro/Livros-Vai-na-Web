import livroAberto from "../../assets/livroAberto.png"
export default function QueroDoar(){
    return(
        <main>
            <section>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <section>
                    <img src={livroAberto} alt="Ícone de um livro aberto."/>
                    <h3>Informações do Livro</h3>
                    <form action="">
                        <input type="text" name="" id="" placeholder="Titulo"/>
                        <input type="text" name="" id="" placeholder="Categoria"/>
                        <input type="text" name="" id="" placeholder="Autor"/>
                        <input type="text" name="" id="" placeholder="Link da Imagem"/>
                        <button>Doar</button>
                    </form>
                </section>
            </section>
        </main>
    )
}