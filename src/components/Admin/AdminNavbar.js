import React from 'react'


const NavbarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'darkslategrey' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href='/admin' style={{ color: 'white' }}>
                <img src='https://cdn3.vectorstock.com/i/1000x1000/20/17/gift-coupon-label-or-price-tag-vector-23262017.jpg' className="d-block w-90" alt="Background" height="45px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{marginLeft:"20%"}}>
                            <a className="nav-link" href="/adminAllCoupons"  style={{color: 'white' }}>Coupons</a>
                        </li>
                        <li className="nav-item" style={{marginLeft:"10%"}}>
                            <a className="nav-link" href="/adminAllProducts"  style={{color: 'white' }}>Products</a>
                        </li>
                        <li className="nav-item" style={{marginLeft:"10%"}}>
                            <a className="nav-link" href="/sendMail"  style={{color: 'white' }}>
                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACVCAMAAAAqlkWFAAABGlBMVEX////qQzVChfQ0qFPFIh/7vATk8+dQsmkupk5EiPXM3PzZ7t4npUr7vwDgOi/tXSz7xDT/9d/qPi/qOir98/LpNSPBAAD85+Y9gvTFHhnxioPpLxv74d/4xsPzn5nwf3frSz3sWEz619Xvc2r2u7f//PX1rKfoKBHuaV/tYVfsU0bLGgDxkIroIABjmfb1+vbt8/6Ttvijwfnqvb3eiIfPS0nHLCnJODbgkZD96sX82or8zk/81HD+8NHXcG7cgH3+57b8z2L94qLRVlTjo6L728eeQWzQv0SLWJejsCxta723MUTnuRN/rj5WedjHtSNWq0exNk+FYKjWtx+9LDaZTH6uO1nKkKvTootzvoS33cCRy5+60fuk1K/eCljnAAAHF0lEQVR4nO3caVfbOBQGYMlOSmihBdmJmzgLBEhDgC5DgdIytAWmU1q6z0rb//835joLWWxJV8aWPBzfz07Ic/RqsSxDyGS59d2ne/uFQuHg9Nmu55Js1cby4fMXi0WopaPDXzf4F3rrx/uVShUchWq1Ujl4uZ4lysaro6XiuBZfnyxzrny2VxgohlWtFE53tf5WUR2+Ls7U4tLzKEr7dEoxsrysa//JUbUcYvRr6TB05dl+mBFUZa9t4HfP1q9LkQ5olZOZrnIW0RzDRqmeme4pGyccRlBHU5KzKs8RSI7NSjaOBI5i8fnEpfz2GMTroGFMAb2cF6tRnVxd2ha0x6BR9s3F60TmKBZfja7dkzj68TLDkMRqUEvDbvKsInME8SqYmFJeyZtj3E08eYP0G+XgTDdDOFpNNUl/YjxDOYLJ8djT6ljGxGrcJO4xJlmDeO3pHL1+w8WqXy+gSeqcKT2yUe52dI1ebuce3tFfquyiGwTqrlPTEy+v5txbVJDAXPJUCUKdTR1rr3qPUSUILFRO8ckKINTZST1ebsdnVBlyoAihlKUcL6/Ggj+jBHm9QRQYQwh1VtKMV2PTocoQmEliQChzmmnFy+04jGqDgKSVzp2j1xo59EAgXqtpxKvdLV/9BU0Qymjyo1eTOVQ7hDJ/LdnRy6s9mPh6fRBKy90k49XoOtQQBOLVTMzRYYwag1D6oJbM6FVv+bNfrRcCa68klvazsTIASSReHRp2aIdQ6l9zcqy3ylFfqx8C8Vq/hqPdi2gOMxBYscSfHDsr0Q4jEJhS1uLFy1vzGecrzUCovxpn9GqsRnYPkxC4SekoOzqc7mEUQplqvNzNMi9WcSAqew9CCHSUnkq8Gpv8WMWBvBE/UlCBQLzwd45NKmoOVcjvt8j82wJeIoFAvFq4pb1XE8ZKFXI+d4tY1rv3sucjaAjECzV6iUYrdcjFh1IfYn18g5XIIbBqksbL7TiC0UoZ8umzPYRY82+RHQUBCTYmxPFya7O3HteCnNv2FQQaZQ9FwUAgXlS09moweazwkIvP9hQE4oWR4CCUMW68xvtWiUA+9R2TEGv+65Z8SkFCQMK5c/RaslFXCXJu2yEIjF5fpBIsBOK1EjV6taPuoGJDLj7YkRCI15YkXngITCmhpb3bRPVyLGQYqwgIxEvy+EoBAgNxa3q3qN5Sccggi+clmwsJJkdhvJQg1JmaHBur+FjJIeNYRUMko5caZHLX3pWurZQg30q2BGJZbwWPfhQh4117r8W9E4wDObdtOcR6t7+VFGS0a9/eVIuVGDIdKz7Emn/DWxCrQyjzm972jmpziCCfSrMOHgTiVYju8zEg0Chd3JoEB1mcjZUQYn18HxmvWBDVXi6EhGMlhnCW9vEg8SoSMjEJIiEQrz/C8TINiYqVFBLcOWYLEh0rOSRi7WUUwokVAmJZX2cmR4OQyNEKDYGl/VY2IN+4scJBLOvPyXgZg3wLT4KqEGtyaW8IciGKFRpivfurYhbCH63UILD2GsXLCEQwWilCIF7DydEARDhaKUMgXltmIPJYqUGGk6N2CCJWihBYe8HopRtyLh5140Gsj1+qeiHiSTA+BOKF3e5MoNg9ZKxiQKz5v3kPxRMvh/2DjFUsyO12V/qkKZEqd9t3FtKEEG9bA4SVtz2SMoS46w/SjpfDgkf2aUOCo6DpSpzBCcP0IcTdjrkxginGaoNtVg0Q5NPMWAWxGm4X64CkF6/y+K0OPRCIVwqT41WsNEJg9Ep8cnR6kw+5dEGmD7InUeXe1BMufRBCcE/+ccXozPs1OiGko/g4jV/OyuwhA60Q0l4NnaCOVX74LQ69kGQmR8a2wyclNEMIWe9dt8+HY2UEQtqb14uXH/1qo37I9eLFypwDOAYghDQUzphMF0yCnO80AiGNtXgSwUtBZiDErcVYe7FyjX9s0BAkzuTo9EQn7YxBSHtNbRz2W8J3zcxBiNIJB7bTEp9GNQiByREdL0d6PtgohNTXcJNjuSt9IcAsBEYvxA5ef98q45Bg7SWLV/TaKnMQGL3EU4qDezPWPCTYVuVLmIOIVUYgoo0Jx8e+6pcFSLAxEd0mDv71pWxAiNeMaBPmK/yviIxAYPTamaWUHZUX4zIDCf4RRdxYZQsyfRae+REbDP8TCMRrZbQgxk2CmYXA2qsvYYi1VbYhg3ixFcVYZRASrL185VhlEgLxivWKePYgMSuH5JAckkNySA7JITkkh+SQHJJDckgOySE5JIekAZm/KZCH928C5N9H5MlNgdy+CRD7kpDHCtnKKiToIkQlW1mFLHwPPqDQJBmFlOxH/U/8uI+VZBNSKl0OP/ILVpJRyM+rz2AlWYSUSj8fjT/04yGKkj1IaWHucupTj58ARWrJGKS0sDD3/c7s5x7ffvJQtu7KGGTu++Wtq8v/AzGTVuhjZHFCAAAAAElFTkSuQmCC'
                             className="d-block w-90" alt="Background" height="20px" />
                            </a>
                        </li>
                        <li className="nav-item" style={{marginLeft:"10%"}}>
                            <a className="nav-link" href="/sendSms"  style={{color: 'white' }}>

                            <img src='data:image/png;base64,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' 
                            className="d-block w-90" alt="Background" height="23px"  />
                            </a>
                        </li>
                        <li className="nav-item" style={{marginLeft:"180%"}}>
                            <a className="nav-link" href="/adminLogin"  style={{color: 'red' }}>Logout</a>
                        </li>

                        {/* <form class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                                <li class="nav-item" >
                                    <button className="buttonlearn" >

                                        LOGOUT
                                    </button>
                                </li>

                            </ul></form> */}



                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default NavbarHome;
