import { Helmet } from "react-helmet"

function Miokara({}) {
    return (
        <div className="bg-gray-600 rounded-xl h-fit w-full md:p-10 p-5 flex flex-col items-center mb-20">
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
    )
}

function GameEarth({}) {
    return (
        <div className="bg-gray-600 rounded-xl h-fit w-full md:p-10 p-5 flex flex-col items-center mb-20">
                <img className="h-[150px]" src='./ge.png'/>
                <div>
                    <p className="md:text-4xl text-3xl text-gray-200 font-grenze mt-3">GamEarth</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze mt-10">GamEarth est une communauté axée sur le gaming, fondée il y a plusieurs années. Nous misons sur notre écoute et notre convivialité pour nous démarquer des autres communautés.</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze mt-3">Notre équipe organise des événements avec des lots à la clé, pour compléter les soirées organisées par les membres. En effet, ces derniers ont la possibilité de créer leurs propres soirées, via un bot dédié, pour animer le serveur.</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze ">Nous mettons à disposition de notre communauté des serveurs de jeux : Minecraft (Survie, Créatif, Skyblock, FTB), Rust, SCP: Secret Laboratory, Ark.</p>
                    <p className="md:text-xl text-lg text-gray-300 font-grenze ">Les joueurs de tous horizons sont les bienvenus !</p>
                    <div className="mt-5 flex gap-10">
                        <a href="https://discord.gamearth.fr/">
                            <img className="h-10 hover:cursor-pointer hover:scale-105 animate-bounce" src='./discorddd.png'></img>
                        </a>
                        <a href="https://twitter.com/GamEarthFR">
                            <img className="h-10 hover:cursor-pointer hover:scale-105 animate-bounce" src='./twitter.webp'></img>
                        </a>
                        <a href="https://www.instagram.com/gamearthfr_/">
                            <img className="h-10 hover:cursor-pointer hover:scale-105 animate-bounce" src='./instagram.png'></img>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default function PartenairesPage({}) {
    return (
        <div className="bg-gray-500 h-fit min-h-screen w-full flex flex-col px-5">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <p className="lg:text-5xl text-4xl text-gray-200 font-grenze mb-10 pt-20 self-center">Nos partenaires</p>
            <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-10 xl:px-20">
                <Miokara />
                <GameEarth />
            </div>
        </div>
    )
}