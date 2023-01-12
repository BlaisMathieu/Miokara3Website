import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';

export default function HomePage({}) {
    return (
        <div className="min-h-screen relative w-full">
             <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <img className="blur-[3px]" src='./wallpaper.png' />
            <div className="absolute top-[200px] left-[150px] mt-5">
                <img className="w-[550px]" src='./Logo.png'></img>
            </div>
            <Link to='/inscriptions'>
                <div className="absolute top-[100px] right-[150px] mt-5 hover:cursor-pointer hover:mr-10 transition-all duration-500">
                    <img className="w-[500px]" src='./tab.png'></img>
                </div>
            </Link>
        </div>
    )
}