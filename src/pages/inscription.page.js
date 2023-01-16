import { Helmet } from "react-helmet"

export default function InscriptionPage({}) {
    return (
        <div className="bg-gray-500 min-h-screen w-full flex flex-col xl:flex-row justify-center items-center gap-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className="xl:w-1/2 w-full h-[80%] flex flex-col gap-10 items-center justify-center xl:mt-0 mt-[120px]">
                <div className="w-[80%] h-fit bg-gray-600 p-5 rounded-xl hover:scale-105 transition duration-500">
                    <p className="font-grenze text-gray-300 text-xl mb-3">Présence sur le discord MCPG+ obligatoire sinon votre inscription ne pourra pas être confirmée !</p>
                    <a href="https://discord.gg/YuEhD6Hu9s">
                        <img className="h-[80px]" src='./discord2.png'></img>
                    </a>
                </div>
                <div className="w-[80%] h-fit bg-gray-600 p-5 rounded-xl hover:scale-105 transition duration-500">
                    <p className="font-grenze text-gray-300 text-xl mb-3">Si vous souhaitez modifier votre inscription (changement de team, de pseudo etc...), Merci de reremplir à nouveau le formulaire.</p>
                    <img className="h-[80px]" src='gif.webp'></img>
                </div>
                <div className="w-[80%] h-fit text-center bg-gray-600 p-5 rounded-xl flex flex-col justify-center hover:scale-105 transition duration-500">
                    <p className="font-grenze text-gray-300 text-3xl mb-3">Seulement 120 places disponibles !!!</p>
                    <p className="font-grenze text-green-500 text-xl mb-3">- Des places sont encore disponibles -</p>
                </div>
            </div>

            <div className="xl:w-1/2 w-full xl:h-screen h-[500px] flex items-start xl:mt-[120px]">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfO9yLksysuJSbBnwnqtmBklJj425HAQARJquo5yZx_km1QlA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            </div>
        </div>
    )
}