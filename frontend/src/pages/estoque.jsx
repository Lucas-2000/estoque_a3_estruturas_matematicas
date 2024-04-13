import { Menu } from "../components/menu/menu"

export const Estoque = () => {

    return (
        <section>
            <Menu />
            <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 shadow-md">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-10">Sistema de Estoque</h1>
                    </div>
                     
                </div>

            </div>
        </section>
    );
}