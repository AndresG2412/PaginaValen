import s1 from "./Fotos/foto.jpg"
import s2 from "./Fotos/foto2.jpg"
import s3 from "./Fotos/foto3.jpg"
import s4 from "./Fotos/foto4.jpg"
import s5 from "./Fotos/foto5.jpg"
import s6 from "./Fotos/foto6.jpg"
import s7 from "./Fotos/foto7.jpg"
import s8 from "./Fotos/foto8.jpg"
import s9 from "./Fotos/foto9.jpg"
import s10 from "./Fotos/foto10.jpg"
import s11 from "./Fotos/foto11.jpg"
import s12 from "./Fotos/foto12.jpg"
import s13 from "./Fotos/foto13.jpg"
import s14 from "./Fotos/foto14.jpg"
import s15 from "./Fotos/foto15.jpg"
import s16 from "./Fotos/foto16.jpg"
import s17 from "./Fotos/foto17.jpg"
import s18 from "./Fotos/foto18.jpg"
import s19 from "./Fotos/foto19.jpg"
import s20 from "./Fotos/foto20.jpg"
import s21 from "./Fotos/foto21.jpg"
import s22 from "./Fotos/foto22.jpg"
import s23 from "./Fotos/foto23.jpg"

const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s12, s13, s15, s17, s18, s19, s20, s21, s22, s23]

import Slider from "./Components/Slider"

function App() {
  return (
    <>
      <div className="md:px-0 px-12">
        <p className="font-bold text-white tracking-widest text-center md:text-3xl mt-24">ERES Y SIEMPRE SERAS MI PERSONA FAVORITA</p>
        <p className="font-bold text-white tracking-widest text-center md:text-3xl">ERES Y SIEMPRE SERAS MI MEJOR APOYO</p>
        <p className="font-bold text-white tracking-widest text-center md:text-3xl">ERES Y SIEMPRE SERAS MI VIDA</p>
        <br />
        <p className="font-bold text-white tracking-widest text-center md:text-3xl">Te amo por una y mil razones que no termino de contar nunca</p>
      </div>

      <div className="flex justify-center md:mt-24 mt-12">
        <Slider images={images}/>
      </div>
    </>
  )
}

export default App
