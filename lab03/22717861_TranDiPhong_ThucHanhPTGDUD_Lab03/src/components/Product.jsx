import "../css/Product.css"




const Product = () => {
    return (
        <>
            <div className="product">
                <div className="product-image">
                    <img src="../../public/img/comChienTrungCaChua.PNG" alt="" />
                </div>

                <div className="block-product-content">
                    <p className="food-title">Com Chien Trung Ca </p>
                    <img src="../public/img/flag.PNG" alt="" />
                    <div className="time-done-block">
                        <p className="time-done">14 phut</p>
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Product;