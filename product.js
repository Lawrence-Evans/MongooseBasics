const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
       console.log("Connected")
    })
    .catch(err => {
        console.log("Failed to connect")
        console.log(err)
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        onSale: {
            type: Boolean,
            default: false
        }
    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product ({name: 'Bike Helemt', price: 29.99})
    bike.save()
        .then(data => {
            console.log("It worked!")
            console.log(data);
        })
        .catch(err => {
            console.log("Error")
            console.log(err)
        })

