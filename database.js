const mongoose;

const customerSchema = new mongoose.Schema({
    customer_name: { type: string, required: true,},
});

const addressSchema = new mongoose.Schema({
    customer_id: { type: string, required: true},
    address: {type: string, required: true},
});

const productSchema = new mongoose.Schema({
    product_name: {type: string, required: true},
    price: {type: decimal, required: true},
});

const payementSchema = new mongoose.Schema({
    name: {type: string, required:true},
    is_active: {type: string, required: true},
});

const orderSchema = new mongoose.Schema({
    produk_name : {type: string, required:true},
    payment_id : {type: string, required:true},
    address_id : {type: string, required:true},

});


const Order = mongoose.model("order",orderSchema);
const Payment = mongoose.model("payment",payementSchema)
const Product = mongoose.model("product",productSchema);
const Address = mongoose.model("address",addressSchema);
const Customer = mongoose.model("customer", customerSchema);


module.exports = { Order, Payment, Product, Address, Customer };

