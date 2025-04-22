import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { ShoppingBag, Loader, AlertCircle, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const cart = useSelector((state) => state.shopping.cart)

    // Calculate total items in cart
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                // In a real app, you would fetch from an API
                // For this example, we'll use the provided JSON data
                const sampleProducts = [
                    {
                        id: 1,
                        name: "Laptop",
                        price: 999.99,
                        image: "/assets/img/laptop.jpg",
                    },
                    {
                        id: 2,
                        name: "Headphones",
                        price: 99.99,
                        image: "/assets/img/headphones.jpg",
                    },
                    {
                        id: 3,
                        name: "Smartphone",
                        price: 699.99,
                        image: "/assets/img/smartphone.jpg",
                    },
                    {
                        id: 4,
                        name: "Wireless Mouse",
                        price: 49.99,
                        image: "/assets/img/mouse.jpg",
                    },
                    {
                        id: 5,
                        name: "Mechanical Keyboard",
                        price: 129.99,
                        image: "/assets/img/keyboard.jpg",
                    },
                    {
                        id: 6,
                        name: "Monitor",
                        price: 299.99,
                        image: "/assets/img/monitor.jpg",
                    },
                ]

                // Simulate network delay
                setTimeout(() => {
                    setProducts(sampleProducts)
                    setLoading(false)
                }, 800)
            } catch (err) {
                setError(err.message || "Failed to load products")
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with cart link */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <div className="flex items-center mb-4 md:mb-0">
                        <ShoppingBag className="w-8 h-8 text-purple-500 mr-3" />
                        <h1 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Our Products
                        </h1>
                    </div>

                    <Link
                        to="/shopping-cart"
                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5 text-purple-400 mr-2" />
                        <span>View Cart</span>
                        {cartItemCount > 0 && (
                            <span className="ml-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                        <Loader className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                        <p className="text-xl text-gray-300">Loading products...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                        <p className="text-xl text-red-400 font-medium mb-2">Failed to load products</p>
                        <p className="text-gray-400">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Product Grid */}
                {!loading && !error && (
                    <>
                        {products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                <ShoppingBag className="w-16 h-16 text-gray-600 mb-4" />
                                <p className="text-xl text-gray-300 mb-2">No products found</p>
                                <p className="text-gray-400 text-center max-w-md">
                                    We couldn't find any products at the moment. Please check back later.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductItem key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductList
