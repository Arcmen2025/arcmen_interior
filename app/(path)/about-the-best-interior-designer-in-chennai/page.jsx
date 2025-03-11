import React from 'react'
import Aboutpage from './Aboutpage'

export const metadata = {
  title: "Interior decorators in chennai | Best bungalow interior decorators Chennai",
  description: 'Luxury Bungalow Interior decorators in Chennai, We promise best in design, price & Quality',
  keywords:['interior decorators in chennai','interior decoration in chennai','interior decorator chennai','interior designers chennai','interior decorator in chennai','interiors in chennai','interior designer chennai','best interior decorators in chennai','interior decoration','interior decors in chennai','furniture chennai','interior decoration pictures','interior designers in chennai','interior decorator','home interior decorators in chennai','home decorators chennai','interior decoration chennai','interior decorators','interior designing chennai','home interior designers in chennai' ],
  canonical: 'https://arcmeninterior.com/faqs/'
};

const page = () => {
  const user=process.env
  return (
    <div>
      <Aboutpage />
    </div>
  )
}

export default page

