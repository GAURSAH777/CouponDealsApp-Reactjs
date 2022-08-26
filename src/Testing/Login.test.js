import axios from "axios";

let user = {
    username: "GAURSAH",
    password: "gaurab@123"

}

test("Testing Register funciton.", async () => {
    axios.post("http://localhost:8090/api/auth/signin", user).then((resp) => {
        let cou = result.data;
        expect(cou).toBe(cou);
    });
});