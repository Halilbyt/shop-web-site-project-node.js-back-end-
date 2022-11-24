const categories = [
    {id:"1",name:"Phone",desc:"Phone category"},
    {id:"2",name:"Notebook",desc:"Notebook category"},
    {id:"3",name:"Tablet",desc:"Tablet category"}
]

module.exports = class Category{
    constructor(name,desc){
        this.id     = (categories.length+1).toString();
        this.name   = name;
        this.desc   = desc;
    }
    //save category
    saveCategory(){
        categories.push(this);
    }
    // get categories:
    static getAll(){
        return categories;
    }
    // get the category object by id
    static getById(id){
        const category = categories.find(i=>i.id === id);
        return category;
    }
    //update category object porperties
    static update(category){
        const index = categories.findIndex(i => i.id === category.id);
        categories[index].name = category.name;
        categories[index].desc = category.desc;
    }
    // delete the category object
    static deleteById(id){
        const index = categories.findIndex(i =>i.id === id);
        categories.splice(index,1);
    }

}