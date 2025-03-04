import React from 'react'
import Architechhero from './Architechhero'
import "./architechstyle.scss";

export const metadata={
  title:'Architects and Interior designers in Chennai',
  description:['Architects and Interior designers in Chennai',' Chennai 12 yrs best interior Design Studio & showroom our Architects brings the best design'],
  keywords:['Architects and Interior designers in Chennai','Interior architects in chennai','Top Interior architects in Chennai','interior design architect','interior designer architect','interior architecture firms'],
}

const page = () => {
  return (
    <div>
         <Architechhero />
    </div>
  )
}

export default page