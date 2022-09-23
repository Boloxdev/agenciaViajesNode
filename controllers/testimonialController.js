import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async(req, res) => {
    //validar formulario
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre === ''){
        errores.push({mensaje : "El nombre está vacio"});
    }
    if(correo === ''){
        errores.push({mensaje : "El Correo está vacio"});
    }
    if(mensaje === ''){
        errores.push({mensaje : "El Mensaje está vacio"});
    }

    if(errores.length > 0){
        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else{
        //Almacenar valores
       try {
        
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
       } catch (error) {
            console.log(error);
       }
    }
}

export {
    guardarTestimonial
}