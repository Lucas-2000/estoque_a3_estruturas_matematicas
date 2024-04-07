import { MainButton } from "../components/Buttons/MainButton";
import "./index.css";
import imgNovoProduto from '../images/NovoProduto.svg'
import imgEstoque from '../images/Estoque.svg'
import imgMainEstoque from '../images/MainEstoque.jpg'
import imgIconEstoque from '../images/iconEstoque.svg'
export const Index = () => {
    return (
        <div className="index">
            <main className="main-index">
                <header><h1>Sistema de Estoque</h1></header>
                <section className="txt-index">
                    <p>
                        O sistema de controle de estoque em TypeScript é uma ferramenta poderosa para gerenciar eficientemente o fluxo de produtos na sua empresa. Com funcionalidades robustas e benefícios tangíveis, estamos confiantes de que ele se tornará uma parte essencial do seu dia a dia operacional.
                    </p>
                </section>
                <div className="buttons-index">
                    <article>
                        <MainButton class="link-button novoProduto" icon={imgNovoProduto} linkTo="/" value="Cadastrar Produto" />
                    </article>
                    <article>
                        <MainButton class="link-button estoque" icon={imgEstoque} linkTo="/" value="Acessar Estoque" />
                    </article>
                </div>
            </main>
            <section className="image-index">
                <img src={imgMainEstoque} alt="Prateleiras de Estoque" />
            </section>
        </div>
    );
}