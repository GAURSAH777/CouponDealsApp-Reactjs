import axios from "axios";

let product = {
    productId: "5",
    productName: "ZOMATO",
    price: "199",
    imageUrl: "https://images.app.goo.gl/XNQ5gnCidxDjRGVb8"

}

test("Testing View All Products funciton.", async () => {
    axios.get("http://localhost:8083/product/all").then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing Add Product funciton.", async () => {
    axios.post("http://localhost:8083/product/add", product).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing View Product By Id funciton.", async () => {
    axios.get("http://localhost:8083/product/product/" + 5).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing Update Product funciton.", async () => {
    axios.put("http://localhost:8083/product/update", product).then(resp => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});


