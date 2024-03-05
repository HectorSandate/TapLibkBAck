import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  ingredientes: {
    type: String,
    required: true,
  },

  procedimiento: {
    type: String,
    required: true,
  },

  duracion: {
    type: String,
    required: true,
  },


  isActive: { 
    type: Boolean,
     default: true },
});

//Es para especificarle a mongoose cual es nuestro modelo
export default mongoose.model("Receta", recetaSchema);
