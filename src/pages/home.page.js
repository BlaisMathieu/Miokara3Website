import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';

export default function HomePage({}) {
    return (
        <div className="h-screen relative w-full overflow-hidden">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className="absolute z-10 blur-[3px] h-screen w-full scale-110">
                <video className="object-cover w-full h-full" autoPlay loop muted webkit-playsinline="true" playsinline="true">
                    <source src="./video.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="relative z-30 flex flex-col xl:flex-row items-center justify-center min-h-screen 2xl:gap-80 xl:gap-40 gap-10 lg:pb-28 mt-[55px]"> 
                <div>
                    <img className="xl:w-[550px] md:w-[400px] w-[300px]" src='./Logo.png'></img>
                    <p className="animate-pulse text-[#FCB774] xl:w-[550px] md:w-[400px] w-[300px] text-center font-grenze text-2xl xl:text-4xl"><span className="xl:text-6xl text-4xl text-white">314 euros </span>de dotations à gagner dont 140 euros de carte cadeau AMAZON</p>
                </div>
                <Link to='/inscriptions'>
                    <div className="hover:cursor-pointer hover:scale-105 transition-all duration-500 mb-10">
                        <img className="xl:w-[500px] md:w-[400px] w-[300px]" src='./tab.png'></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}