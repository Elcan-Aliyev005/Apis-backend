const express = require('express')
const { connectDB } = require('./db')
const app = express()
const cors = require("cors")
require("dotenv").config()
const PizzaRouter = require("./routes/pizza-routes")
const pizzaSchema = require('./models/pizza-schema')


app.use(express.json())
app.use(cors())

app.use("/api/pizzas", PizzaRouter);


const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Welcome")
})


// const createPizzaManually = async () => {
//     const pizzaData = {
//         "name": "Barbekü Toyuq",
//         "description": "Barbekü sousu, qril toyuq, qırmızı soğan, mozzarella pendiri",
//         "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD...",
//         "sizes": [
//             { "size": "mini", "diameter": 17, "price": 7 },
//             { "size": "kicik", "diameter": 23, "price": 9 },
//             { "size": "orta", "diameter": 30, "price": 11 },
//             { "size": "boyuk", "diameter": 35, "price": 13 }
//         ]
//     }



//     try {
//         const pizzas = [
//             {
//                 name: "Çiken Ranç",
//                 description: "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_a875457644d14093cd4bc0a47f647576.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 6 },
//                     { size: "kicik", diameter: 23, price: 9 },
//                     { size: "orta", diameter: 30, price: 12 },
//                     { size: "boyuk", diameter: 35, price: 15 }
//                 ]
//             },
//             {
//                 name: "Marqarita",
//                 description: "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_f8da8b4b68e91c8a697aed2baf03f041.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 6 },
//                     { size: "kicik", diameter: 23, price: 8 },
//                     { size: "orta", diameter: 30, price: 10 },
//                     { size: "boyuk", diameter: 35, price: 12 }
//                 ]
//             },
//             {
//                 name: "4 Pendir",
//                 description: "Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar pendirləri",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_5e5aaab1bded23b900fb49edce788888.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 11 },
//                     { size: "kicik", diameter: 23, price: 14 },
//                     { size: "orta", diameter: 30, price: 17 },
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Qarışıq ət",
//                 description: "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosis, Vetçina, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_3905c3a91f3b9c786a289f6b8d9e6713.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 14 },
//                     { size: "kicik", diameter: 23, price: 17 },
//                     { size: "orta", diameter: 30, price: 20 },
//                     { size: "boyuk", diameter: 35, price: 23 }
//                 ]
//             },
//             {
//                 name: "NY STYLE PIZZA PEPPERONI",
//                 description: "Pizza sousu, Pepperoni, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_ce8525f0903364867882afc8ec572b98.jpg",
//                 sizes: [
//                     { size: "boyuk", diameter: 35, price: 23 }
//                 ]
//             },
//             {
//                 name: "NY STYLE PIZZA MARGARITA",
//                 description: "Pizza sousu, Mozzarella, Pomidor, Oreqano",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_6cc4d1e4fb49b0d8f707a952fc28d9d9.jpg",
//                 sizes: [
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Papa Miks",
//                 description: "Çiken Barbekyu, Hot & Spaysi, Marqarita, Klassik Pepperoni",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_3156bc879a85a6fc09d57895cd45d04a.jpg",
//                 sizes: [
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Qarışıq Ət BBQ",
//                 description: "BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosis, Vetçina, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_8a7726c327a867444654c77d733ea2c9.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 15 },
//                     { size: "kicik", diameter: 23, price: 17 },
//                     { size: "orta", diameter: 30, price: 20 },
//                     { size: "boyuk", diameter: 35, price: 23 }
//                 ]
//             },
//             {
//                 name: "Amerikan Hot",
//                 description: "Pizza sousu, Mozzarella pendiri, Pepperoni, Halapeno Bibəri",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_ec836ad55fb828a2816c7f52d317cabb.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 6 },
//                     { size: "kicik", diameter: 23, price: 8 },
//                     { size: "orta", diameter: 30, price: 10 },
//                     { size: "boyuk", diameter: 35, price: 12 }
//                 ]
//             },
//             {
//                 name: "Karnaval",
//                 description: "Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_09e9a3d604c6811fe50a621c3d3940c8.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 10 },
//                     { size: "kicik", diameter: 23, price: 13 },
//                     { size: "orta", diameter: 30, price: 16 },
//                     { size: "boyuk", diameter: 35, price: 18 }
//                 ]
//             },
//             {
//                 name: "Cheddar Çiken Club",
//                 description: "Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_12e23e16599c1a699587c3ec857fcb8f.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 11 },
//                     { size: "kicik", diameter: 23, price: 14 },
//                     { size: "orta", diameter: 30, price: 17 },
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Cheddar Dabl Burger",
//                 description: "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_272af9ab17eaa7d57062c927e94164b1.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 13 },
//                     { size: "kicik", diameter: 23, price: 16 },
//                     { size: "orta", diameter: 30, price: 19 },
//                     { size: "boyuk", diameter: 35, price: 22 }
//                 ]
//             },
//             {
//                 name: "Çiken Barbekyu",
//                 description: "Pizza Sousu, Qril Toyuğu, Göbələk, Mozzarella, Barbekyu Sousu",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_15135b56809cd2a5d12ca173e680e81e.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 6 },
//                     { size: "kicik", diameter: 23, price: 8 },
//                     { size: "orta", diameter: 30, price: 10 },
//                     { size: "boyuk", diameter: 35, price: 12 }
//                 ]
//             },
//             {
//                 name: "Çiken Baffalo",
//                 description: "Ranç Sousu, Çiken poppers, Vetçina, Mozzarella, Baffalo Sousu",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_867e3e360e53589e9c9d53b3820786c9.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 12 },
//                     { size: "kicik", diameter: 23, price: 14 },
//                     { size: "orta", diameter: 30, price: 17 },
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Çiken Çizburger",
//                 description: "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_55dc22481753618bf6d61dfb087099f2.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 12 },
//                     { size: "kicik", diameter: 23, price: 14 },
//                     { size: "orta", diameter: 30, price: 17 },
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Çiken Parmezan",
//                 description: "Pizza sousu, Sarımsaqlı parmezan sousu, Çiken Poppers, Göbələk, Mozzarella, İtalyan ədviyyatları",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_b13328cf37671350c49a3d6644504d39.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 11 },
//                     { size: "kicik", diameter: 23, price: 14 },
//                     { size: "orta", diameter: 30, price: 17 },
//                     { size: "boyuk", diameter: 35, price: 20 }
//                 ]
//             },
//             {
//                 name: "Klassik Pepperoni",
//                 description: "Pizza sousu, Pepperoni, Ekstra Mozzarella",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_35c4eb8d6c59dd507e7cce1f2c15a987.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 6 },
//                     { size: "kicik", diameter: 23, price: 9 },
//                     { size: "orta", diameter: 30, price: 12 },
//                     { size: "boyuk", diameter: 35, price: 15 }
//                 ]
//             },
//             {
//                 name: "Crispy 4 Pendir",
//                 description: "Pizza sousu, Panko Mozzarella, Feta, Parmezan və Cheddar pendirləri",
//                 image: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_7b16deda9e2b23dceee96491c62b78c4.jpg",
//                 sizes: [
//                     { size: "mini", diameter: 17, price: 12 },
//                     { size: "kicik", diameter: 23, price: 15 },
//                     { size: "orta", diameter: 30, price: 18 },
//                     { size: "boyuk", diameter: 35, price: 21 }
//                 ]
//             }
//         ];




//         const createdPizza = await pizzaSchema.insertMany(pizzas); // Bulk insert

//         console.log("✔️ Pizza yaradıldı:", createdPizza);
//     } catch (err) {
//         console.error("❌ Pizza yaradılarkən xəta:", err.message);
//     }
// };

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server ${port} portunda işləyir`);
    connectDB()
    // createPizzaManually()
})