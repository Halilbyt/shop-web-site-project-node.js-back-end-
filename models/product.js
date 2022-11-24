const Category = require("./category");

const products =   [
    {
       id:"31335",
       img:"monster_1.jpg",
       brand:"Monster Abra A5 V19.2.7",
       features:"Intel Core i5-12500H 16GB RAM 500GB SSD 4GB RTX3050Ti Windows 11 15,6'' FHD 144Hz Oyun Bilgisayarı",
       price:22.599,
       check:"monster_1",
       categoryId:"2"
    },
    {
       id:"15832",
       img:"msi_2.jpg",
       brand:"MSI STEALTH",
       features:"GS77 12UGS-026TR Dizüstü Bilgisayar, 17.3 QHD 240Hz, Core I7-12700H, 32GB RAM, RTX3070TI 8GB, 1TB SSD, Windows 11, Siyah",
       price:61.369,
       check:"msi_2",
       categoryId:"2"
    }, 
    {
       id:"11195",
       img:"monster_2.jpg",
       brand:"Monster Tulpar T7 V20.5.6",
       features:"Intel Core i7-12700H 32GB RAM 1TB SSD 6GB RTX3060 FreeDOS 17,3'' FHD 144Hz Oyun Bilgisayarı",
       price:33.999,
       check:"monster_2",
       categoryId:"2"
    },
    {
       id:"77735",
       img:"apple_1.jpg",
       brand:"2021 Apple MacBook Pro",
       features:"14 inç, 8 çekirdekli CPU’ya ve 14 çekirdekli GPU’ya sahip Apple M1 Pro çip, 16 GB RAM, 512 GB SSD - Gümüş Rengi",
       price:44.999,
       check:"apple_1",
       categoryId:"2"
    },  
    {
       id:"52450",
       img:"msi_1.jpg",
       brand:"MSI NB TITAN GT77 ",
       features:"12UHS-036TR Dizüstü Bilgisayar, 17.3 UHD 120Hz, Core I9-12900HX, 64GB RAM, RTX3080TI 16GB, 2TB SSD, Windows 11",
       price:"112.999",
       check:"msi_1",
       categoryId:"2"
    },               
    {
       id:"21235",
       img:"monster_3.jpg",
       brand:"Monster Semruk S7 V8.1.1 ",
       features:"Intel Core i9-11900K 32GB RAM 1TB SSD 16GB RTX3080 Windows 11 17.3'' UHD Oyun Bilgisayarı",
       price:"64.999",
       check:"monster_3",
       categoryId:"2"
    },
    {
       id:"91235",
       img:"apple_2.jpg",
       brand:"M2 çipli 2022 Apple MacBook Air laptop",
       features:"13.6 inç Liquid Retina ekran, 8GB RAM, 512 GB SSD depolama, arkadan aydınlatmalı klavye, 1080p FaceTime HD kamera. iPhone ve iPad ile uyumlu;​​​​​​​ Uzay Grisi",
       price:"44.999",
       check:"apple_2",
       categoryId:"2"
    },
    {
      id:"11121",
      img:"phone_2.jpg",
      brand:"Samsung Galaxy S22 Ultra ",
      features:"Galaxy S22 Ultra 5G 256 GB | 12 GB RAM Cep Telefonu, Yeşil (Samsung Türkiye Garantili)12 GB RAM,Arka kamera: 108.0 MP + 10.0 MP + 12.0 MP + 10.0 MP, Ön kamera: 40.0 MP Type-C 5000 mAh pil",
      price:"31.127",
      check:"phone_2",
      categoryId:"1"
   },  
    {
       id:"51235",
       img:"msi_4.jpg",
       brand:"MSI NB GF63 THIN",
       features:"11UD-615XTR Dizüstü Bilgisayar, 15.6 FHD 144Hz, Core I7-11800H, 8GB RAM, RTX3050TI 4GB, 512GB SSD, DOS, Siyah",
       price:"27.691",
       check:"msi_4",
       categoryId:"2"
    },
    {
      id:"11235",
      img:"phone_1.jpg",
      brand:"Apple iPhone 13",
      features:"6.1 inç Super Retina XDR ekran, 12 MP Geniş ve Ultra Geniş kameralara sahip gelişmiş çift kamera sistemi, 19 saate kadar video oynatma",
      price:"28.291",
      check:"phone_1",
      categoryId:"1"
   },
   {
      id:"31235",
      img:"tablet_1.jpg",
      brand:"Samsung Galaxy Tab",
      features:"Galaxy Tab S8 11 inç, 128 GB | 8 GB RAM Tablet (WiFi), Gümüş (Samsung Türkiye Garantili), Maksimum Ekran Çözünürlüğü	2560 x 1600 Pixels",
      price:"12.958",
      check:"tablet_1",
      categoryId:"3"
   }, 
   {
      id:"31235",
      img:"tablet_2.jpg",
      brand:"2021 Apple iPad Pro",
      features:"2021 Apple iPad Pro (12.9 inç, Wi-Fi + Cellular, 2 TB) - Gümüş Rengi (5. nesil),Maksimum Ekran Çözünürlüğü=800 x 480 Pixels,12 MP Geniş kamera, 10 MP Ultra Geniş kamera",
      price:"58.686",
      check:"tablet_2",
      categoryId:"3"
   },   
    
];

module.exports = class Product{

    constructor(brand,price,img,features){
        //
        this.brand          =   brand;
        this.price          =   price;
        this.img            =   img;
        this.features       =   features;
        this.check          =   img.split(".")[0];
        this.id             =   (Math.floor((Math.random()*99999))+1).toString();        
    }
    //save method to the list of the object
    saveProduct(){
        //this meaning the object which we created by constructor..
        // this correnponding to object of the Product which produced of it
        products.push(this);
    }

    //gethering all products
    static getAll(){
        return products;
    }

    // selection product by id
    static getById(id){
      const product = products.find(i => i.id === id);
      return product;
    }
    // get products by category Id
    static getProductsByCategoryId(categoryId){
      const filteredProducts = products.filter(i => i.categoryId == categoryId);
      return filteredProducts;
    }

    // update product
    static update(product){
      const index = products.findIndex(i=> i.id===product.id);
      products[index].brand       =    product.brand; 
      products[index].price       =    product.price;
      products[index].features    =    product.features;
      products[index].img         =    product.img; 
      products[index].id          =    product.id;
      products[index].check       =    product.check;
            
    }

    // delete product
    static deleteById(id){
      const index = products.findIndex(i => i.id === id);
      products.splice(index,1);
    }
}

/*
// usage of the get all product objects the way:
const productList = Product.getAll();
// that is how we can use saveProduct function
const p = new Product("Apple Notebook Pro",1500,"apple_3.jpg","xxxxx","xxxx xxx xxxxx");
p.saveProduct();
*/


