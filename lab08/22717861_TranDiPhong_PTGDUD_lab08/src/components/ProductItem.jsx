import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../features/shoppingSlice"
import { ShoppingCart, Package, Plus, Check } from "lucide-react"
import { useState } from "react"

function ProductItem({ product }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.shopping.cart)
    const [isAdding, setIsAdding] = useState(false)

    // Check if product is in cart
    const isInCart = cart.some((item) => item.id === product.id)

    // Handle adding product to cart
    const handleAddToCart = () => {
        if (!isInCart) {
            setIsAdding(true)
            dispatch(addItem(product))

            // Reset animation after a delay
            setTimeout(() => {
                setIsAdding(false)
            }, 1500)
        }
    }

    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group">
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden bg-gray-700">
                {product.image ? (
                    <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null
                            e.target.style.display = "none"
                            e.target.nextSibling.style.display = "flex"
                        }}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Package className="w-16 h-16 text-gray-500" />
                    </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700" style={{ display: "none" }}>
                    <Package className="w-16 h-16 text-gray-500" />
                </div>

                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full font-bold shadow-md">
                    ${product.price.toFixed(2)}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{product.name}</h3>

                <div className="mt-4">
                    <button
                        onClick={handleAddToCart}
                        disabled={isInCart}
                        className={`w-full py-2 px-4 rounded-lg flex items-center justify-center font-medium transition-all duration-300 ${isInCart
                            ? "bg-green-600 text-white cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg"
                            }`}
                    >
                        {isAdding ? (
                            <span className="flex items-center">
                                <Plus className="w-5 h-5 mr-2 animate-ping" />
                                Adding...
                            </span>
                        ) : isInCart ? (
                            <span className="flex items-center">
                                <Check className="w-5 h-5 mr-2" />
                                Added to Cart
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
