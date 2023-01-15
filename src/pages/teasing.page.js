import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function TeasingPage({}) {
    return (
        <div className="w-full relative overflow-hidden min-h-screen h-full bg-black">
            <div className="absolute z-10 blur h-screen w-full scale-110 opacity-70 mb-2">
                <img className="object-cover w-full h-full" src="./teaser.png" />
            </div>
            <div className="relative z-20 w-full h-full flex items-center pt-20 h-screen">
                <div className="w-1/2 h-full p-32 items-center flex flex-col">
                    <p className="font-grenze text-gray-200 text-8xl">De quoi vous donner envie de venir...</p>
                    <p className="font-grenze text-gray-300 text-4xl mt-10">Un plugin inédit, jamais encore fait dans Minecraft, juste pour cette cité</p>
                    <p className="font-grenze text-gray-400 text-xl mt-3 self-start">Developed by Miokara</p>
                </div>
                <div className="w-1/2 flex items-center h-full p-20">
                <Carousel>
                    <div>
                        <img src="./a1.png" />
                    </div>
                    <div>
                        <img src="./a2.png" />
                    </div>
                    <div>
                        <img src="./a3.png" />
                    </div>
                    <div>
                        <img src="./a4.png" />
                    </div>
                    <div>
                        <img src="./a5.png" />
                    </div>
                    <div>
                        <img src="./a6.png" />
                    </div>
                    <div>
                        <img src="./a7.png" />
                    </div>
                    <div>
                        <img src="./a8.png" />
                    </div>
                    <div>
                        <img src="./a9.png" />
                    </div>
                </Carousel>
                </div>
            </div>
            <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden mb-2">
                <div className="absolute z-10 h-screen w-full">
                    <img src="e.png" className="object-cover w-full h-full" autoPlay loop muted>
                    </img>
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-end">
                    <div className="p-10 bg-gray-500 w-1/3 rounded-xl rounded-tr-[130px] shadow-xl mr-32">
                        <p className="font-grenze text-gray-100 text-6xl mb-10">Equipez-vous et partez explorer !</p>
                        <p className="font-grenze text-orange-400 text-3xl mb-5">52 Fossiles différents et de toutes tailles trouvables entre la couche 6 et la couche 50</p>
                        <p className="font-grenze text-orange-300 text-2xl">Probabilité de génération différentes selon les biomes. Certains fossiles ne se génèrent que dans un biome en particulier</p>
                    </div>
                </div>
            </div>
            <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden mb-2">
                <div className="absolute z-10 h-screen w-full">
                    <img src="ee.png" className="object-cover w-full h-full" autoPlay loop muted>
                    </img>
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-end">
                    <div className="p-10 bg-gray-500 w-1/3 rounded-xl rounded-tr-[130px] shadow-xl mr-32">
                        <p className="font-grenze text-gray-100 text-6xl mb-10">Un fossile ?</p>
                        <p className="font-grenze text-orange-400 text-3xl mb-5">Vous tombez sur un fossile ? Alors commencez à le déterrer sans l'abimer.</p>
                        <p className="font-grenze text-orange-300 text-2xl">Plus aucun bloc ne doit être en contact avec le fossile pour que l'éxcavation puisse débuter.</p>
                    </div>
                </div>
            </div>
            <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden mb-2">
                <div className="absolute z-10 h-screen w-full">
                    <img src="eeee.png" className="object-cover w-full h-full" autoPlay loop muted>
                    </img>
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-end">
                    <div className="p-10 bg-gray-500 w-1/3 rounded-xl rounded-tr-[130px] shadow-xl mr-32">
                        <p className="font-grenze text-gray-100 text-6xl mb-10">L'éxcavation</p>
                        <p className="font-grenze text-orange-400 text-3xl mb-5">Une fois le fossile détérré, ne faites plus rien, l'éxcavation est automatique.</p>
                        <p className="font-grenze text-orange-300 text-2xl">Si votre fossile ne se décompose pas tout seul, alors il doit encore etre en contact avec de la roche.</p>
                    </div>
                </div>
            </div>
            <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden mb-2">
                <div className="absolute z-10 h-screen w-full">
                    <img src="eee.png" className="object-cover w-full h-full" autoPlay loop muted>
                    </img>
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-end">
                    <div className="p-10 bg-gray-500 w-1/3 rounded-xl rounded-tr-[130px] shadow-xl mr-32">
                        <p className="font-grenze text-gray-100 text-6xl mb-10">Bravo !</p>
                        <p className="font-grenze text-orange-400 text-3xl mb-5">Vous venez de déterrer un fossile. Récuperez l'os dropé au sol.</p>
                        <p className="font-grenze text-orange-300 text-2xl">Allez maintenant le revendre contre des émeraudes au paléonthologue au spawn de la cité.</p>
                    </div>
                </div>
            </div>
            <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden">
                <div className="absolute z-10 h-screen w-full">
                    <img src="yyy.png" className="object-cover w-full h-full" autoPlay loop muted>
                    </img>
                </div>
                <div className="relative z-40 w-full h-full flex items-center justify-end">
                    <div className="p-10 bg-gray-500 w-1/3 rounded-xl rounded-tr-[130px] shadow-xl mr-32">
                        <p className="font-grenze text-gray-100 text-6xl mb-10">Récompenses !</p>
                        <p className="font-grenze text-orange-400 text-3xl mb-5">Les 3 meilleures chercheurs de fossiles de chaques classement seront récompensés à la fin de la cité.</p>
                        <p className="font-grenze text-orange-300 text-2xl">15%, 10%, 5% de bonus d'émeraudes respectivement en se basant sur leur nombre d'émeraudes en banque à la fin de la cité.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}