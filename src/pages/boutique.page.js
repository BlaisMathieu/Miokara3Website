
export default function BoutiquePage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-center justify-center gap-10">
            <div className="hover:rotate-[360deg] transition duration-700 hover:cursor-pointer">
                <img className="h-52" src='./LOGOMAXI.png'/>
            </div>
            <div className="text-center px-10">
                <p className="text-5xl text-gray-200 font-grenze mb-5">Ouverture de la boutique le 22 Février a 20H00</p>
                <p className="text-xl text-gray-300 font-grenze">44 companions dropables avec les clés de la boutique dont 9 nouveaux companions obtenables seulement pendant cette cité</p>
                <p className="text-xl text-gray-300 font-grenze">Tous vos cosmétiques seront conservés pour les futures évènements Miokara/MCPG</p>
                <p className="text-lg text-gray-300 italic mt-10 font-grenze">- La totalité de l'argent récolté avec la boutique sera réinjecté dans de nouveaux évènements -</p>
            </div>
        </div>
    )
}