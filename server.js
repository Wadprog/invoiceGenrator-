const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");
const Services = require("./models/service");
const Clients = require("./models/client");
const Invoices = require("./models/invoice");

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// connection to database;
connectDB();

const moment = require("moment");
app.use(express.json({ extended: false }));

app.post("/invoices", async function (req, res) {
  console.log(req);
  console.log(req.body.f);
  const { clientId, selectedProducts, type, date } = req.body.f;
  try {
    let invoice = new Invoices({ client: clientId, type, date });
    selectedProducts.forEach(function (product) {
      product.total = product.amount * product.price;
      invoice.items.push(product);
    });
    invoice = await invoice.save();
    res.redirect("/services");
  } catch (error) {
    console.error(error);
  }
});

app.use(express.urlencoded());

app.get("/", async function (req, res) {
  try {
    let services = await Services.find();
    let clients = await Clients.find();
    let invoices = await Invoices.find();
    res.render("index", { services, clients, invoices });
  } catch (error) {}
});

app.get("/invoice/pdf/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const invoice = await Invoices.findById(id).populate("client");
    if (!invoice) res.send(`invoice con numero ${id} no existe`);
    res.render("invoice/pdf", { invoice, moment });
  } catch (error) {
    res.send(`invoice con numero ${id} no existe`);
  }
});

app.get("/invoice/print/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const invoice = await Invoices.findById(id).populate("client");
    if (!invoice) res.send(`invoice con numero ${id} no existe`);
    res.render("invoice/print", { invoice, moment });
  } catch (error) {
    res.send(`invoice con numero ${id} no existe`);
  }
});

app.get("/invoices", async function (req, res) {
  let invoices = await Invoices.find().populate("client");

  res.render("invoice/invoices", { invoices, moment });
});

app.get("/services", async function (req, res) {
  try {
    const services = await Services.find();
    res.render("service/services", { services });
  } catch (error) {
    return res.send(`error findin services ${error}`);
  }
});

app.get("/invoices/new", async function (req, res) {
  try {
    let services = await Services.find();
    let clients = await Clients.find();
    let comprobantes = [{ id: 1, comprobante: "B0100000001", status: "used" }];
    res.render("invoice/new", { services, clients, comprobantes });
  } catch (error) {}
});

app.get("/invoices/test", async function (req, res) {
  try {
    let services = await Services.find();
    let clients = await Clients.find();
    let invoices = await Invoices.find();
    res.render("invoice/test", { services, clients, invoices });
  } catch (error) {}
});

app.get("/services", async function (req, res) {
  try {
    const services = await Services.find();
    res.render("service/services", { services });
  } catch (error) {
    return res.send(`error findin services ${error}`);
  }
});
app.get("/services/new", function (req, res) {
  res.render("service/newService");
});

app.post("/services", async function (req, res) {
  const { name, price, unit } = req.body;
  try {
    let service = await Services.findOne({ name });
    if (service) return res.send("service already exist ");
    service = new Services({ name, price, unit });
    await service.save();
    res.redirect("/services");
  } catch (error) {}
});

app.get("/clients", async function (req, res) {
  try {
    let clients = await Clients.find();
    res.render("client/clients", { clients });
  } catch (error) {}
});

app.get("/clients/new", function (req, res) {
  res.render("client/newClient");
});

app.post("/clients", async function (req, res) {
  const { name, phone, email, address } = req.body;
  try {
    let client = new Clients({ name, phone, email, address });
    await client.save();
    res.redirect("/clients");
  } catch (error) {}
});

app.get("/api/client", async function (req, res) {
  try {
    let clients = await Clients.find();
    res.json(clients);
  } catch (error) {}
});

app.get("/api/service", async function (req, res) {
  try {
    let services = await Services.find();
    res.json(services);
  } catch (error) {}
});

//use the routes

/*app.use("/api/clientes", require("./routes/api/client"));
app.use("/api/usuarios", require("./routes/api/usuarios"));
app.use("/api/factura", require("./routes/api/factura"));
app.use("/api/cotization", require("./routes/api/cotization"));

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
*/
const PORT = process.env.Port || 4000;
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
