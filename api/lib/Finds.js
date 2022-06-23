import InventarioSchema from '../models/Inventario.js'
import Categories from '../models/Inventario.js'
export default {
    findOneInventario: async (params)=>{ return await InventarioSchema.findOne(params)},
    findOneCategories: async (params)=>{ return await Categories.findOne(params)}
}