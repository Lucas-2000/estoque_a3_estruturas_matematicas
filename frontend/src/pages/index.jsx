import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import imgEstoque from '../images/iconEstoque.svg'
import novoProduto from '../images/NovoProduto.svg'
import { Menu } from "../components/menu/menu"

export const Index = () => {
    return (
        <section>
            <Menu />
            <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-orange-500 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="text-2xl font-bold text-white md:text-3xl">
                                Sistema de Estoque
                            </h2>

                            <p className="hidden text-white/90 sm:mt-4 sm:block">
                                O sistema de Controle de Estoque em TypeScript é uma ferramenta poderosa para gerenciar eficientemente o fluxo de produtos na sua empresa. Com funcionalidades robustas e benefícios tangíveis, estamos confiantes de que ele se tornará uma parte essencial do seu dia a dia operacional.
                            </p>

                            <div className="mt-4 md:mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                                <a href="/novoProduto">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Cadastre um novo produto</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <img src={novoProduto} alt="" className="mx-auto max-w-lg max-h-lg" />
                                        </CardContent>
                                    </Card>
                                </a>
                                <a href="/estoque">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Acesse o Estoque</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <img src={imgEstoque} alt="" className="mx-auto max-w-lg max-h-lg" />
                                        </CardContent>
                                    </Card>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />

                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}