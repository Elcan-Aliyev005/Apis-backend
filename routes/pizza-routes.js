const express = require("express");
const PizzaRouter = express.Router();
const Pizza = require("../models/pizza-schema");



// 🔸 Bütün pizzaları çək
PizzaRouter.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔸 Tək pizza ID ilə
PizzaRouter.get("/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) return res.status(404).json({ error: "Pizza tapılmadı" });
    res.json(pizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔸 Yeni pizza əlavə et
PizzaRouter.post("/", async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);
    res.status(201).json(newPizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔸 Pizza redaktə et (update)
PizzaRouter.put("/:id", async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPizza) return res.status(404).json({ error: "Pizza tapılmadı" });
    res.json(updatedPizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔸 Pizza sil
PizzaRouter.delete("/:id", async (req, res) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    if (!deletedPizza) return res.status(404).json({ error: "Pizza tapılmadı" });
    res.json({ message: "Pizza silindi" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = PizzaRouter;
