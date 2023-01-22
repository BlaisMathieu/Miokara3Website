import React, { useState } from 'react';
import { Helmet } from "react-helmet"

export default function ReglementPage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-end justify-end gap-10 pb-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className='hidden lg:flex w-full h-full mt-[55px]'>
                <object data="./reglement2.pdf" type="application/pdf" width="100%" height="100%"></object>
            </div>
            <div className='lg:hidden w-full h-full flex items-center justify-center p-5 text-center'>
                <p className='text-3xl text-gray-200 font-grenze'>Merci d'ouvrir le site sur PC pour visualiser le réglement</p>
            </div>
        </div>
    )
}