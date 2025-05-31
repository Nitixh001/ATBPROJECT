const Category = require("../model/categorymodel");
//create category
exports.createCategory = async (req,res)=>{
    try{
        const {name, description, status} = req.body;
        const image = req.file? req.file.path : "";
        const category = new Category({name, description, status, image});
        await category.save();
        res.status(201).json({
            success: true,
            message: "Category Created Successfully",
            data: category
        });
    }catch(error){
    res.status(500).json({
        success: false,
        error: error.message
    });
    }
};
 /*   //getAll Category
exports.getAllCategories = async (req,res)=>{
    try{
        const categories = await Category.find();
        res.json(categories);
}catch (error){
    res.status(500).json({error:error.message});
}
};*/
//export single category
exports.singleCategory = async (req,res)=>{
    try{
        const category = await Category.findById(req.params.id);
        if(!category)return res.status(404).json({error:"Category Not Found"});
        res.json(category);
    }catch(error){
        res.status(500).json({
            success: false,
            error:error.message
        });
    }
};
//Update Category
exports.updateCategory = async (req,res)=>{
    try{
        const{name,description,status} = req.body;
        const updates = {name, description, status};
        if(req.file){
            updates.image = req.file.path;
        }
        const category = await Category.findByIdAndUpdate(req.params.id,updates,{new: true,});
        if(!category) return res.status(404).json({
            success: false,
            error:"Category Not Found"
        });
        res.json({
            success: true,
            message: " Category Updated Successfully",
            data: category
        });
    }catch(error){
        res.status(500).json({
        success: false,
        error:error.message
    });
    }
};
//Delete Category
exports.deleteCategory = async (req,res)=>{
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        if(!category) return res.status(404).json({error:"Category Not Found"});
        res.json({
            success: true,
            message: "Category Deleted Successfully",
            data: category
        });
    }catch (error){
        res.status(500).json({
            success: false,
            error:error.message
        });
    }
};