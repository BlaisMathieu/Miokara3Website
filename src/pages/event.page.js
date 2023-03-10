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
                <title>{'Cit?? de Miokara'}</title>
            </Helmet>
            <div className="w-full h-full flex flex-col pt-32">
                <Right img={'./minia.png'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Le trailer</p>
                    <p className="font-grenze md:text-lg text-gray-300">Va jeter un coup d'oeil au trailer de la cit??, les infos principales y sont pr??sentes.</p>
                    <p className="font-grenze md:text-lg text-gray-300">https://www.youtube.com/watch?v=Ub9BnidHQV4</p>
                </Right>
                <Left img={'./cit??.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Cit?? des sables</p>
                    <p className="font-grenze md:text-lg text-gray-300">Concept cr???? par Zelvac en 2012 et repris par de nombreux youtubeurs et streamers depuis.</p>
                    <p className="font-grenze md:text-lg text-gray-300">La cit?? d'Hakuna matata a ??t?? une des ??dition les plus marquantes avec la participation de Gotaga, Siphano ou encore Frigiel.</p>
                </Left>
                <Right img={'./emerald.webp'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Le but du jeu</p>
                    <p className="font-grenze md:text-lg text-gray-300">Ce type d'event est ax?? survie/farm. Des villageois, disponibles au spawn, ??changent tout types de ressources
                    contre des ??meraudes. Les joueurs devront se faire une base sur la map et farmer les ressources qui leur semble les plus rentables.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Le joueur ou la team ayant le plus d'??meraudes dans sa banque remporte la cit??.</p>
                </Right>
                <Left img={'./wall6.png'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Date / horaires</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-5">Date: du 22 F??vrier 20h00 au 26 F??vrier 21h00</p>
                    <p className="font-grenze md:text-lg text-gray-300">Serveur ouvert de 09h00 ?? 03h00</p>
                </Left>
                <Right img={'./wall5.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les events / animations</p>
                    <p className="font-grenze md:text-lg text-gray-300">Et oui ! Le farm n'est pas la seule fa??on de gagner de ??meraudes.</p>
                    <p className="font-grenze md:text-lg text-gray-300">De nombreux events et animations sont disponibles tout au long de la cit??, souvent en soir??e pour attirer
                    un maximum de personnes.</p>
                    <p className="font-grenze md:text-lg text-gray-300">{`(UHC RUN, Build battle, jump, pvp tournament, quake)`}</p>
                    <p className="font-grenze md:text-lg text-gray-300">{`(Quiz Minecraft, base la plus jolie etc)`}</p>
                </Right>
                <Left img={'./yyy.png'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">314 euros de dotations ?? gagner !</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-2">Les dotations seront r??parties entre les 2 classements (??meraude et fun)</p>
                    <p className="font-grenze md:text-lg text-gray-300">140 euros de cartes cadeaux Amazon !</p>
                    <p className="font-grenze md:text-lg text-gray-300">Des coupes d'une valeur de 15 euros pour les 3 premiers.</p>
                </Left>
                <Right img={'./wall4.jpg'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les pillages</p>
                    <p className="font-grenze md:text-lg text-gray-300">Que serait une cit?? sans pillages ? Malgr?? une map faisant souvent + de 10 000 blocs de large, en raison
                    du nombreux nombre de joueurs, les pillages sont assez fr??quents. Il est donc n??cessaires de bien cacher sa base.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Pas de soucis ?? vous faire, le pvp sera en 1.8</p>
                </Right>
                <Left img={'./wall.JPG'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les commandes importantes</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-2">/home vous t??l??portera ?? votre habitation au spawn, si vous n'en avez pas alors la commande ne fera rien.</p>
                    <p className="font-grenze md:text-lg text-gray-300">/team bal pour connaitre le nombre d'??meraudes de votre team en banque</p>
                    <p className="font-grenze md:text-lg text-gray-300">/companions pour acc??der ?? vos companions obtenable via la boutique</p>
                    <p className="font-grenze md:text-lg text-gray-300">/helpop pour contacter le staff</p>
                </Left>
                <Right img={'./wall7.JPG'}>
                    <p className="md:text-2xl text-xl font-grenze text-gray-200">Les habitations</p>
                    <p className="font-grenze md:text-lg text-gray-300 mt-3">+ de 100 habitations sont disponibles au spawn de la cit??.</p>
                    <p className="font-grenze md:text-lg text-gray-300">Acheter une habitation vous permettra de vous y t??l??porter et de ne pas faire le chemin ?? pied depuis votre base.
                    Vous pourrez ??galement y stocker des items. Seul vous et votre team auront acc??s a l'habitation.</p>
                </Right>
                <div className="mb-20">
                    <Left img={'./e.png'}>
                        <p className="md:text-2xl text-xl font-grenze text-gray-200">Particularit?? de cette cit??</p>
                        <p className="font-grenze md:text-lg text-gray-300 mt-1">Plugin in??dit d??velopp?? pour cette cit??.</p>
                        <p className="font-grenze md:text-lg text-gray-300">G??n??ration automatique et al??atoire de fossiles de dinosaures sous le sol. Possibilit?? pour les joueurs de les d??t??rrer et de les revendre contre des ??meraudes.</p>
                        <p className="font-grenze md:text-lg text-gray-300">Plus d'info sur <Link to='/teasing'><span className="text-orange-300 underline">la page Teasing</span></Link></p>
                    </Left>
                </div>
            </div>
        </div>
    )
}