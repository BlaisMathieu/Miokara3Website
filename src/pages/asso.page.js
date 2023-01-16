import { Helmet } from "react-helmet"

export default function AssoPage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-center justify-center gap-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
        </div>
    )
}