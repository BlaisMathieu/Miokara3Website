import React, { useState } from 'react';
import { Helmet } from "react-helmet"

export default function ReglementPage({}) {
    return (
        <div className="bg-gray-500 h-screen w-full flex flex-col items-end justify-end gap-10 pb-10">
            <Helmet>
                <title>{'Cité de Miokara'}</title>
            </Helmet>
            <div className='w-full h-full mt-[55px]'>
                <object data="./reglement.pdf" type="application/pdf" width="100%" height="100%">
                </object>
            </div>
        </div>
    )
}