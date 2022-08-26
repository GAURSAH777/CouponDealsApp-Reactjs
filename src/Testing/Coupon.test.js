import axios from "axios";

let coupon = {
    couponId: "5",
    productName: "ZOMATO",
    couponCode: "Food120",
    category: "food",
    offerdetails: "12% off",
    expirydate: "2023-07-07",
    price: "199",
    imageUrl: "https://images.app.goo.gl/XNQ5gnCidxDjRGVb8"

}

test("Testing View All Coupons funciton.", async () => {
    axios.get("http://localhost:8082/coupon/allCoupons").then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing Add Coupon funciton.", async () => {
    axios.post("http://localhost:8082/coupon/save", coupon).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing View Coupon By Id funciton.", async () => {
    axios.get("http://localhost:8082/coupon/get/" + 5).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});

test("Testing Update Coupon funciton.", async () => {
    axios.put("http://localhost:8082/coupon/update", coupon).then(resp => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});


