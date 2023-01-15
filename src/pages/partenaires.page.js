
export default function PartenairesPage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-center gap-10">
            <p className="text-5xl text-gray-200 font-grenze mb-5 mt-20">Nos partenaires</p>
            <div className="bg-gray-600 rounded-xl h-[650px] w-[500px] p-10 flex flex-col items-center">
                <img className="h-[150px]" src='./miokara.png'/>
                <div>
                    <p className="text-4xl text-gray-200 font-grenze mt-3">Miokara</p>
                    <p className="text-xl text-gray-300 font-grenze mt-10">Equipe de gestion, accompagnement et développement de projets Minecraft en tout genre.</p>
                    <p className="text-xl text-gray-300 font-grenze mt-3">- Développements de plugins sur mesures</p>
                    <p className="text-xl text-gray-300 font-grenze ">- Choix et configuration de serveurs</p>
                    <p className="text-xl text-gray-300 font-grenze ">- Builds</p>
                    <p className="text-xl text-gray-300 font-grenze ">- Développement de sites web / plateformes web</p>
                    <p className="text-xl text-gray-300 font-grenze mt-5">Une idée d'un projet ou évènement Minecraft à réaliser ? Contactez-nous, nous serons ravi de vous venir en aide</p>
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