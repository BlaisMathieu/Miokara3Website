import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Carrousel({}) {
    return (
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
    )
}


function Card({img, children}) {
    return (
        <div className="relative z-30 h-screen w-full opacity-100 overflow-hidden mb-2">
            <div className="absolute z-10 h-screen w-full">
                <img src={img} className="object-cover w-full h-full"></img>
            </div>
            <div className="relative z-40 w-full h-full flex items-center justify-end">
                {children}
            </div>
        </div>    
    )
}

export default function TeasingPage({}) {
    return (
        <div className="w-full relative overflow-hidden min-h-screen h-full bg-black">
            <div className="absolute z-10 blur h-screen w-full scale-110 opacity-70 mb-2">
                <img className="object-cover w-full h-full" src="./teaser.png" />
            </div>

            <div className="relative z-20 w-full h-full flex 2xl:flex-row flex-col items-center justify-center pt-20 h-screen">
                <div className="md:w-1/2 h-full text-center justify-center items-center flex flex-col px-10">
                    <p className="font-grenze text-gray-200 2xl:text-8xl text-6xl">De quoi vous donner envie de venir...</p>
                    <p className="font-grenze text-gray-300 text-4xl mt-10">Un plugin inédit, jamais encore fait dans Minecraft, juste pour cette cité</p>
                    <p className="font-grenze text-gray-400 text-xl mt-3 self-start ml-5">Developed by Miokara</p>
                </div>
                <div className="2xl:w-1/2 2xl:max-w-full max-w-[600px] w-full lg:flex hidden items-center h-full px-10 2xl:mr-32">
                    <Carrousel />
                </div>
            </div>
            <Card
                img={"e.png"}
                children={
                    <div className="sm:p-10 p-5 bg-gray-500 xl:w-1/3 md:w-2/3 w-full rounded-xl sm:rounded-tr-[130px] shadow-xl xl:mr-32 mx-10">
                        <p className="font-grenze text-gray-100 text-4xl lg:text-6xl mb-10">Equipez-vous et partez explorer !</p>
                        <p className="font-grenze text-orange-400 text-xl lg:text-3xl mb-5">52 Fossiles différents et de toutes tailles trouvables entre la couche 6 et la couche 50</p>
                        <p className="font-grenze text-orange-300 text-lg lg:text-2xl">Probabilité de génération différentes selon les biomes. Certains fossiles ne se génèrent que dans un biome en particulier</p>
                    </div>
                }>
            </Card>
            <Card
                img={"ee.png"}
                children={
                    <div className="sm:p-10 p-5 bg-gray-500 xl:w-1/3 md:w-2/3 w-full rounded-xl sm:rounded-tr-[130px] shadow-xl xl:mr-32 mx-10">
                        <p className="font-grenze text-gray-100 text-4xl lg:text-6xl mb-10">Un fossile ?</p>
                        <p className="font-grenze text-orange-400 text-xl lg:text-3xl mb-5">Vous tombez sur un fossile ? Alors commencez à le déterrer sans l'abimer.</p>
                        <p className="font-grenze text-orange-300 text-lg lg:text-2xl">Plus aucun bloc ne doit être en contact avec le fossile pour que l'éxcavation puisse débuter.</p>
                    </div>
                }>
            </Card>
            <Card
                img={"eeee.png"}
                children={
                    <div className="sm:p-10 p-5 bg-gray-500 xl:w-1/3 md:w-2/3 w-full rounded-xl sm:rounded-tr-[130px] shadow-xl xl:mr-32 mx-10">
                        <p className="font-grenze text-gray-100 text-4xl lg:text-6xl mb-10">L'éxcavation</p>
                        <p className="font-grenze text-orange-400 text-xl lg:text-3xl mb-5">Une fois le fossile détérré, ne faites plus rien, l'éxcavation est automatique.</p>
                        <p className="font-grenze text-orange-300 text-lg lg:text-2xl">Si votre fossile ne se décompose pas tout seul, alors il doit encore etre en contact avec de la roche.</p>
                    </div>
                }>
            </Card>
            <Card
                img={"eee.png"}
                children={
                    <div className="sm:p-10 p-5 bg-gray-500 xl:w-1/3 md:w-2/3 w-full rounded-xl sm:rounded-tr-[130px] shadow-xl xl:mr-32 mx-10">
                        <p className="font-grenze text-gray-100 text-4xl lg:text-6xl mb-10">Bravo !</p>
                        <p className="font-grenze text-orange-400 text-xl lg:text-3xl mb-5">Vous venez de déterrer un fossile. Récuperez l'os dropé au sol.</p>
                        <p className="font-grenze text-orange-300 text-lg lg:text-2xl">Allez maintenant le revendre contre des émeraudes au paléonthologue au spawn de la cité.</p>
                    </div>
                }>
            </Card>
            <Card
                img={"yyy.png"}
                children={
                    <div className="sm:p-10 p-5 bg-gray-500 xl:w-1/3 md:w-2/3 w-full rounded-xl sm:rounded-tr-[130px] shadow-xl xl:mr-32 mx-10">
                        <p className="font-grenze text-gray-100 text-4xl lg:text-6xl mb-10">Récompenses !</p>
                        <p className="font-grenze text-orange-400 text-xl lg:text-3xl mb-5">Les 3 meilleures chercheurs de fossiles de chaques classement seront récompensés à la fin de la cité.</p>
                        <p className="font-grenze text-orange-300 text-lg lg:text-2xl">15%, 10%, 5% de bonus d'émeraudes respectivement en se basant sur leur nombre d'émeraudes en banque à la fin de la cité.</p>
                    </div>
                }>
            </Card>
        </div>
    )
}