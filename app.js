const express       =   require("express");
const path          =   require("path")
const bodyParser    =   require("body-parser");
const _             =   require("lodash");
const app           =   express();
const productController = require("./controller/products");

// adding middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

// adding view egine as ejs
app.set("view engine","ejs");

// home page:
app.get("/",productController.getProducts);

//register page:
app.get("/register",productController.register);

// sign in page
app.get("/signin",productController.siginIn);

// admin page
app.get("/admin",productController.admin);
 
// admin post request
app.post("/admin",productController.adminPost);

//contact page
app.get("/contact",productController.getContact);

// admin product edit
app.get("/admin/:productId",productController.adminProductEdit);

//admin product edit post
app.post("/admin/:productId",productController.adminProductEditPost);

//delete product
app.post("/delete-product",productController.adminDeleteProduct);

//about page
app.use("/about",productController.aboutUs);

// categories
app.get("/:categoryId",productController.getProductsByCategory)

//error 404 page
app.use(productController.get404page);

//starting localhost on port 8000 :
app.listen(8000,()=>{
    console.log("The server is running on port 8000");
})

