import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async(req, res) => { //req lo que enviamos response lo que express responde
    //Consultar 3 viajes del model viaje
    try {
        const viajes = await Viaje.findAll({ limit: 3});
        const testimoniales = await Testimonial.findAll({limit: 3});
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }

};

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => { 
    //consultar bbdd

    const viajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
        
    });
};

const paginaTestimoniales = async (req, res) => { 
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
      });    
    } catch (error) {
        
    }
    
};

//muestra un viaje por su slug
const paginaDetalleViaje = async(req, res) => {
    const { slug } = req.params;

    try{
        const viaje = await Viaje.findOne({where : { slug }});
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    }catch{
        console.log(error);
    }
}
export {
    paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje
}