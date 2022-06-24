import Categories from '../models/Categories.js'
export default {
    findOneCategories: async (params)=>{ return await Categories.findOne(params)},
    findOneByIDCategories: async (params)=>{ return await Categories.findById(params)}
}