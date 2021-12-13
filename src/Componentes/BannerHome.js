import React from "react";
import "./BannerHome.css";
const BannerHome = () => {
const footer= [
    {num: "500M", text: "Gatos en el Mundo"},
    {num: "230M", text: "Gatos Con un Hogar"},
    {num: "15", text: "Edad Promedio"},
]
    return (
        <div className="ContenedorBanner"> 
        <div>
            <h2>Gatitos Bomnitos</h2>
            <p> Los gatos domésticos, sea cual sea su raza, son todos miembros de una misma especie, Felis catus, que mantiene una relación con los humanos desde hace mucho tiempo. Los antiguos egipcios habrían sido los primeros en domesticar gatos, hace ya 4.000 años. </p>
            
            <p>Probablemente, los gatos salvajes se vieron atraídos a las comunidades humanas por la abundancia de roedores que había en ellas, y su habilidad para cazarlos les hizo ganarse la simpatía de sus habitantes. Los primeros egipcios adoraban a una diosa con figura de gato e incluso momificaban a sus mascotas preferidas para que les acompañaran en su viaje al otro mundo...¡acompañados de ratones también momificados! Posteriormente, civilizaciones de todo el mundo adoptaron a los gatos como animales de compañía.</p>
            </div>
            <div className="ImagenBanner">
            <img className="ImagenGatoGris"
                alt="logo1"
                 src={"http://enelnombredelgato.com/wp-content/uploads/2017/08/Alma-Animal-Robert-Bahou-9.jpg"} />
            </div>
            <div className="CifrasCont">
            {footer.map((item, index)=>{
                return(
                    <div className="FooterDescp" key={index}> 
                        <p>{item.num}</p>
                        <p>{item.text}</p>
                    </div>
                )

            })
            }
        </div>
        </div>
    );
};

export default BannerHome;