import axios from 'axios'

const COUPONS_REST_API_URL = 'http://localhost:8087/coupon/allCoupons'

class CouponService{

    getCoupons(){
        return axios.get(COUPONS_REST_API_URL);
    }
}

export default new CouponService();