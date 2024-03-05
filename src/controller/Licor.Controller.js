import Licor from '../models/Licor.Model.js'

export const ingresarLicor = async (req, res) => {
    const { nombreLicor, mililitros, estado } = req.body;
  
    try {
      // Validate input
      if(!nombreLicor) {
        return res.status(400).json({message: 'Ingrese nombre del bar'})
      }
      if(!mililitros) {
        return res.status(400).json({message: 'Ingrese los mililitros'})
      }
  
      const barExists = await Bar.findOne({nombreLicor});
  
      if(barExists) {
        return res.status(400).json({message: 'Licor ya registrado'})  
      }
  
      // Crear nuevo bar
      const licor = await Licor.create({
        nombreLicor, 
        mililitros,
        estado
      });

      console.log(licor);

      res.status(201).json({
        message: 'Licor Ingresado con exito',
        token
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server error'});
    }
  
  }
  