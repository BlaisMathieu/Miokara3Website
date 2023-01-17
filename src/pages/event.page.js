import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"

function Left({img, children}) {
    return (
        <div className="w-full flex justify-start">
            <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             variants={{
               visible: { opacity: 1, scale: 1 },
               hidden: { opacity: 0.5, scale: 0.8 }
             }}
            className="hidden xl:w-3/4 w-full h-[350px] lg:flex relative my-10 md:ml-10">
                <div className="w-1/2 h-[350px] rounded-xl shadow-xl absolute overflow-hidden z-30 border-4 border-gray-600">
                    <img className="w-[100%] h-[100%]" src={img} />
                </div>
                <div className="text-center bg-gray-600 w-1/2 h-fit rounded-r-xl shadow-xl absolute top-10 right-20 z-20 p-5 hover:cursor-pointer hover:right-0 transition-all duration-700">
                    <div className="w-full flex flex-col pl-20">
                        {children}
                    </div>
                </div>
            </motion.div>

            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.5, scale: 0.8 }
            }}
            className="lg:hidden w-full h-fit flex-col my-10 px-10">
                <div className="w-full h-fit rounded-t-xl shadow-xl overflow-hidden z-30 border-4 border-gray-600">
                    <img className="w-[100%] h-[100%]" src={img} />
                </div>
                <div className="text-center rounded-b-xl bg-gray-600 w-full h-fit shadow-xl z-20 p-5 transition-all duration-700">
                    <div className="w-full flex flex-col">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function Right({img, children}) {
    return (
        <div className="w-full flex justify-end">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.5, scale: 0.8 }
            }} className="hidden xl:w-3/4 w-full h-[350px] lg:flex relative self-end md:mr-10 my-10">
                <div className="w-1/2 h-[350px] rounded-xl shadow-xl absolute overflow-hidden top-0 right-0 z-30 border-4 border-gray-600">
                    <img className="w-[100%] h-[100%]" src={img} />
                </div>
                <div className="bg-gray-600 w-1/2 h-fit rounded-l-xl shadow-xl absolute bottom-10 left-20 z-20 p-5 hover:cursor-pointer hover:left-0 transition-all duration-700">
                    <div className="text-center w-full flex flex-col pr-20">
                        {children}
                    </div>
                </div>
            </motion.div>

            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0.5, scale: 0.8 }
            }} className="lg:hidden w-full h-fit flex-col my-10 px-10">
                <div className="w-full h-fit rounded-t-xl shadow-xl overflow-hidden z-30 border-4 border-gray-600">
                    <img className="w-[100%] h-[100%]" src={img} />
                </div>
                <div className="text-center rounded-b-xl bg-gray-600 w-full h-fit shadow-xl z-20 p-5 transition-all duration-700">
                    <div className="w-full flex flex-col">
                        {children}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


export default function EventPage({}) {
    return (
        <div className="w-full container mx-auto">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className="w-full h-full flex flex-col pt-32">
                <Left img={'./cité.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Cité des sables</p>
                    <p className="font-grenze md:text-lg text-gray-300">Concept créé par Zelvac en 2012 et repris par de nombreux youtubeurs et streamers depuis.</p>
                    <p className="font-grenze md:text-lg text-gray-300">La cité d'Hakuna matata a été une des édition les plus marquantes avec la participation de Gotaga, Siphano ou encore Frigiel.</p>
                </Left>
                <Right img={'./emerald.webp'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Le but du jeu</p>
                    <p className="font-grenze md:text-lg text-gray-300">Ce type d'event est axé survie/farm. Des villageois, disponibles au spawn, échangent tout types de ressources
                    contre des émeraudes. Les joueurs devront se faire une base sur la map et farmer les ressources qui leur semble les plus rentables.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Le joueur ou la team ayant le plus d'émeraudes dans sa banque remporte la cité.</p>
                </Right>
                <Left img={'./wall6.png'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Date / horaires</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-5">Date: du 22 Février 20h00 au 26 Février 21h00</p>
                    <p className="font-grenze md:text-lg text-gray-300">Serveur ouvert de 09h00 à 03h00</p>
                </Left>
                <Right img={'./wall5.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les events / animations</p>
                    <p className="font-grenze md:text-lg text-gray-300">Et oui ! Le farm n'est pas la seule façon de gagner de émeraudes.</p>
                    <p className="font-grenze md:text-lg text-gray-300">De nombreux events et animations sont disponibles tout au long de la cité, souvent en soirée pour attirer
                    un maximum de personnes.</p>
                    <p className="font-grenze md:text-lg text-gray-300">{`(UHC RUN, Build battle, jump, pvp tournament, quake)`}</p>
                    <p className="font-grenze md:text-lg text-gray-300">{`(Quiz Minecraft, base la plus jolie etc)`}</p>
                </Right>
                <Left img={'yyy.png'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">314 euros de dotations à gagner !</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-2">Les dotations seront réparties entre les 2 classements (émeraude et fun)</p>
                    <p className="font-grenze md:text-lg text-gray-300">140 euros de cartes cadeaux Amazon !</p>
                    <p className="font-grenze md:text-lg text-gray-300">Des coupes d'une valeur de 15 euros pour les 3 premiers.</p>
                </Left>
                <Right img={'./wall4.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les pillages</p>
                    <p className="font-grenze md:text-lg text-gray-300">Que serait une cité sans pillages ? Malgré une map faisant souvent + de 10 000 blocs de large, en raison
                    du nombreux nombre de joueurs, les pillages sont assez fréquents. Il est donc nécessaires de bien cacher sa base.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Pas de soucis à vous faire, le pvp sera en 1.8</p>
                </Right>
                <Left img={'wall.JPG'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les commandes importantes</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-2">/home vous téléportera à votre habitation au spawn, si vous n'en avez pas alors la commande ne fera rien.</p>
                    <p className="font-grenze md:text-lg text-gray-300">/team bal pour connaitre le nombre d'émeraudes de votre team en banque</p>
                    <p className="font-grenze md:text-lg text-gray-300">/companions pour accéder à vos companions obtenable via la boutique</p>
                    <p className="font-grenze md:text-lg text-gray-300">/helpop pour contacter le staff</p>
                </Left>
                <Right img={'./wall7.JPG'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les habitations</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-3">+ de 100 habitations sont disponibles au spawn de la cité.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Acheter une habitation vous permettra de vous y téléporter et de ne pas faire le chemin à pied depuis votre base.
                    Vous pourrez également y stocker des items. Seul vous et votre team auront accès a l'habitation.</p>
                </Right>
                <div className="mb-20">
                    <Left img={'./e.png'}>
                        <p className="md:text-2xl text-xl font-grenze text-gray-200">Particularité de cette cité</p>
                        <p className="font-grenze md:text-lg text-gray-300 mt-1">Plugin inédit développé pour cette cité.</p>
                        <p className="font-grenze md:text-lg text-gray-300">Génération automatique et aléatoire de fossiles de dinosaures sous le sol. Possibilité pour les joueurs de les détérrer et de les revendre contre des émeraudes.</p>
                        <p className="font-grenze md:text-lg text-gray-300">Plus d'info sur <Link to='/teasing'><span className="text-orange-300 underline">la page Teasing</span></Link></p>
                    </Left>
                </div>
            </div>
        </div>
    )
}