import { Helmet } from "react-helmet"

export default function BoutiquePage({}) {
    return (
        <div className="bg-gray-500 min-h-screen w-full flex flex-col items-center justify-center gap-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            {/* <div className="pt-[55px] mb-20 w-full">
                <embed src="https://miokara-webshop.tebex.io/" className="w-full h-screen" />
            </div> */}
            <div className="transition duration-700 hover:cursor-pointer sm:mt-0 mt-[150px]">
                <a href="https://miokara-webshop.tebex.io/">
                    <p className="text-3xl text-white">Acceder a la boutique</p>
                </a>
            </div>
        </div>
    )
}