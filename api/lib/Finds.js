import Categories from '../models/Categories.js'
import Producto from '../models/Producto.js'
export default {
    findOneCategories: async (params)=>{ return await Categories.findOne(params)},
    findOneByIDCategories: async (params)=>{ return await Categories.findById(params)},
    findOneByIDProductos: async (params)=>{ return await Producto.findById(params)}
}