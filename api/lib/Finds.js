import InventarioSchema from '../models/Inventario.js'
export default {
    findOneInventario: async (params)=>{ return await InventarioSchema.findOne(params)}
}