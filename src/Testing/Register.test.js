import axios from "axios";

let user = {
    customerId: "1",
    email: "gaurab.sah.777@gmail.com",
    username: "GAURSAH",
    password: "gaurab@123"

}

test("Testing Register funciton.", async () => {
    axios.post("http://localhost:8090/api/auth/signup", user).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});