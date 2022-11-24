const { response } = require("express");
const Product = require("../models/product");
const Category=require("../models/category");

// home page
module.exports.getProducts  =  (req,res) => { 
    const categoryId = req.params.categoryId; 
    const productsAll = Product.getAll(); 
    const categories = Category.getAll();
    res.render("home",{
        headerText:"Home",
        items:productsAll,
        categories:categories,
        selectedCategory:categoryId
    })
}

// admin page
module.exports.admin = (req,res) => {
    const productsAll = Product.getAll();   
    console.log("query = "+req.query.action);
    res.render("admin",{
        headerText:"Admin Panel",
        items:productsAll,
        action: req.query.action,
    })
}

// about us page
module.exports.aboutUs = (req,res) => {
    res.render("about",{
        headerText:"About Us"
    })
}

// get product by category
module.exports.getProductsByCategory = (req,res) => {    
    const categoryId    = req.params.categoryId;   
    const productsAll   = Product.getProductsByCategoryId(categoryId);
    const categories    = Category.getAll();
    res.render("home",{
        headerText:"Admin Panel",
        items:productsAll,
        action: req.query.action,
        categories:categories,
        selectedCategory:categoryId
    }) 
}

// sign up page
module.exports.register = (req,res) => {
    res.render("signup",{
        headerText:"Sign Up"
    })
}

// sign in page
module.exports.siginIn = (req,res) => {
    res.render("signin",{
        headerText:"Sign In"
    })
}

//admin product edit
module.exports.adminProductEdit = (req,res) => {
    const productId = req.params.productId;
    const product =  Product.getById(productId);
    res.render("productEdit",{headerText:"Edit Product",product:product})
}

// admin edit product
module.exports.adminProductEditPost = (req,res) => {
    // product id için alternatif olarak ürünün objesinin id değerini kullanmayı dene;
    const product = Product.getById(req.body.id);
    product.brand       =    req.body.productBrand;
    product.features    =    req.body.productFeatures;
    product.price       =    req.body.productPrice;
    product.img         =    req.body.productImage;
    product.id          =    req.body.id; 
    
    console.log(product)
    Product.update(product);
    
    res.redirect("/admin?action=edit");
    // "?action=edit&action&id="+product.id
}

// admin post request:
module.exports.adminPost = (req,res) => {
    // creating new object from Product class
    const newProduct = new Product(
        req.body.productName,
        req.body.productPrice,
        req.body.productImage,
        req.body.productFeatures,
        req.body.productImage.split(".")[0]);

    newProduct.saveProduct();   
    res.redirect("/admin");
}
// delete product
module.exports.adminDeleteProduct = (req,res) => {
    Product.deleteById(req.body.id)
    res.redirect("/admin?action=delete");
}
// contact page
module.exports.getContact = (req,res) => {
    res.render("contact",{
        headerText:"Contact"
    })
}

// 404 page
module.exports.get404page = (req,res) => {
    res.status(404).render("error",{
        headerText:"404 Error"
    })
}