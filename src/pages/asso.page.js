import { Helmet } from "react-helmet"

export default function AssoPage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-center justify-center gap-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className="lg:w-1/2 w-full p-5">
                <div className="w-full h-fit flex items-center justify-center gap-10">
                    <a className="w-full h-full" href='https://www.mcpg.fr/'>
                        <img className="w-[250px]" src="/mcpg+.png"/>
                    </a>
                    <a className="w-full h-full" href="https://discord.gg/WGvfubQ3G6">
                        <img className="w-[200px]" src="/miokara.png"/>
                    </a>
                </div>
                <p className="lg:text-6xl text-5xl font-grenze text-gray-200 mt-10">Une cité par MCPG+ et Miokara</p>
                <img className="mt-10 rounded-xl" src='/mcpgdesc.jpg'>

                </img>
            </div>
        </div>
    )
}