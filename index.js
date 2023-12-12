import express from "express";
const app = express();
const port = 5000;

let arr = [
  {
    id: 1,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-4.jpg",
    category: "Jumpers",
    brand: "River Island",
    name: "Brown paperbag waist pencil skirt",
    size: "M",
    color: "brown",
    price: "$60.00",
  },
  {
    id: 2,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-5.jpg",
    category: "Dresses",
    brand: "Geox",
    name: "Dark yellow lace cut out swing dress",
    size: "XXL",
    color: "dark yellow",
    price: "$84.00",
  },
  {
    id: 3,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-6.jpg",
    category: "Jackets",
    brand: "F&F",
    name: "Khaki utility boiler jumpsuit",
    size: "XL",
    color: "khaki",
    price: "$120.00",
  },
  {
    id: 4,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-7.jpg",
    category: "Jeans",
    brand: "New Balance",
    name: "Blue utility pinafore denim dress",
    size: "XXL",
    color: ["blue", "red"],
    price: "$76.00",
  },
  {
    id: 5,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-8.jpg",
    category: "Shoes",
    brand: "Nike",
    name: "Beige knitted elastic runner shoes",
    size: "XS",
    color: "beige",
    price: "$84.00",
  },
  {
    id: 6,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-9.jpg",
    category: "Bags",
    brand: "UGG",
    name: "Orange saddle lock front chain cross body bag",
    size: "S",
    color: "orange",
    price: "$84.00",
  },
  {
    id: 7,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-11.jpg",
    category: "Shoes",
    brand: "Next",
    name: "Light brown studded Wide fit wedges",
    size: "M",
    color: "light brown",
    price: "$110.00",
  },
  {
    id: 8,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-10.jpg",
    category: "jumpers",
    brand: "Nike",
    name: "Yellow button front tea top",
    size: "L",
    color: ["yellow", "white"],
    price: "$56.00",
  },
  {
    id: 9,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-12.jpg",
    category: "Bags",
    brand: "Next",
    name: "Black soft RI weekend travel bag",
    size: "S",
    color: ["black", "yellow"],
    price: "$68.00",
  },
  {
    id: 10,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-13.jpg",
    category: "Bags",
    brand: "New Balance",
    name: "Beige metal hoop tote bag",
    size: "XS",
    color: "beige",
    price: "$76.00",
  },
  {
    id: 11,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-14.jpg",
    category: "Dresses",
    brand: "UGG",
    name: "Brown zebra print dungaree dress",
    size: "M",
    color: "brown",
    price: "$80.00",
  },
  {
    id: 12,
    image:
      "https://portotheme.com/html/molla/assets/images/products/product-15.jpg",
    category: "Bags",
    brand: "Nike",
    name: "Beige ring handle circle cross body bag",
    size: "XXL",
    color: "beige",
    price: "$56.00",
  },
];

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = arr.find(x => x.id === +id);
  res.send(item) 
});

app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/:id", (req, res) => {
  const item = arr.push

  
});
app.post("/", (req, res) => {
  res.send(arr);
});

app.put("/", (req, res) => {
  res.send("Salam men Putam");
});


app.delete("/:id", (req, res) => {
    const id = req.params.id
    const userID= arr.find(x=>x.id == id)
    if (userID) {
         arr = arr.filter(x=>x.id != id)
        res.status(200).send(arr)
    }
    else{
        res.status(400).json({message: "Couldn't find User!"})
    }
  });

app.delete("/", (req, res) => {
  res.send("salam men Deleteem silirem ");
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
