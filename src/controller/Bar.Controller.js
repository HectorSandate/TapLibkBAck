import Bar from '../models/Bar.Model.js'

export const registerBar = async (req, res) => {
    const { nombreBar, direccion, estado } = req.body;
  
    try {
      // Validate input
      if(!nombreBar) {
        return res.status(400).json({message: 'Ingrese nombre del bar'})
      }
  
      const barExists = await Bar.findOne({direccion});
  
      if(barExists) {
        return res.status(400).json({message: 'bar ya registrado'})  
      }
  
      // Crear nuevo bar
      const bar = await Bar.create({
        nombreBar, 
        direccion,
        estado
      });

      console.log(bar);

      res.status(201).json({
        message: 'Bar Ingresado con exito',
        token
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Server error'});
    }
  
  }
  