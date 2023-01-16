import { Helmet } from "react-helmet"

export default function PartenairesPage({}) {
    return (
        <div className="bg-gray-500 h-fit min-h-screen w-full flex flex-col items-center gap-10 px-5">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <p className="lg:text-5xl text-4xl text-gray-200 font-grenze mb-5 mt-20">Nos partenaires</p>
            <div className="bg-gray-600 rounded-xl h-fit w-fit lg:w-[500px] md:p-10 p-5 flex flex-col items-center mb-20">
                <img className="h-[150px]" src='./miokara.png'/>
                <div>
                    <p className="md:text-4xl text-3xl text-gray-200 font-grenze mt-3">Miokara</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze mt-10">Equipe de gestion, accompagnement et développement de projets Minecraft en tout genre.</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze mt-3">- Développements de plugins sur mesures</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze ">- Choix et configuration de serveurs</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze ">- Builds</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze ">- Développement de sites web / plateformes web</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze mt-5">Une idée d'un projet ou évènement Minecraft à réaliser ? Contactez-nous, nous serons ravi de vous venir en aide</p>
                    <div className="mt-5">
                        <a href="https://discord.gg/WGvfubQ3G6">
                            <img className="h-10 hover:cursor-pointer hover:scale-105 animate-bounce" src='./discorddd.png'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}