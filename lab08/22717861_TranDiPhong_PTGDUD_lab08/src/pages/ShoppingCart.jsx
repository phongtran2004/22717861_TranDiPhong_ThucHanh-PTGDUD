"use client"

import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../features/shoppingSlice"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"
import { ShoppingCartIcon as CartIcon, ShoppingBag, AlertCircle, Loader, Trash2 } from "lucide-react"

function ShoppingCart() {
    const cart = useSelector((state) => state.shopping.cart)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Calculate total price and item count
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    const itemCount = cart.reduce((count, item) => count + item.quantity, 0)

    // Fetch fake data on mount
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
                if (!response.ok) throw new Error("Failed to fetch products")
                const data = await response.json()

                // Map fake data to cart items
                data.forEach((post, index) => {
                    dispatch(
                        addItem({
                            id: post.id,
                            name: post.title.slice(0, 20), // Truncate title
                            price: 49.99 + index * 20, // Fake prices
                            image: `/assets/img/product${index + 1}.jpg`, // Placeholder images
                        }),
                    )
                })
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (cart.length === 0) {
            fetchProducts()
        }
    }, [dispatch, cart.length])

    // Clear cart
    const handleClearCart = () => {
        cart.forEach((item) => dispatch(removeItem(item.id)))
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with icon */}
                <div className="flex items-center justify-center mb-8">
                    <CartIcon className="w-8 h-8 text-purple-500 mr-3" />
                    <h1 className="text-3xl font-bold text-center sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Your Shopping Cart
                    </h1>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-16 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                        <Loader className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                        <p className="text-xl text-gray-300">Loading your products...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex flex-col items-center justify-center py-16 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                        <p className="text-xl text-red-400 font-medium mb-2">Oops! Something went wrong</p>
                        <p className="text-gray-400">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {/* Empty Cart State */}
                {!loading && !error && cart.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                        <ShoppingBag className="w-20 h-20 text-gray-600 mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
                        <p className="text-gray-400 text-center max-w-md mb-8">
                            Looks like you haven't added any products to your cart yet. Browse our collection to find something you'll
                            love!
                        </p>
                        <button
                            onClick={() => window.location.reload()} // Simulate browsing
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                        >
                            Shop Now
                        </button>
                    </div>
                )}

                {/* Cart with Items */}
                {!loading && !error && cart.length > 0 && (
                    <div className="space-y-6">
                        {/* Cart Header */}
                        <div className="flex justify-between items-center bg-gray-800 rounded-t-lg p-4 border-b border-gray-700">
                            <h2 className="text-lg font-medium text-gray-200">
                                Cart Items <span className="text-purple-400">({itemCount})</span>
                            </h2>
                            <button
                                onClick={handleClearCart}
                                className="flex items-center text-red-400 hover:text-red-300 transition-colors"
                            >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Clear Cart
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-4 bg-gray-800 p-4 rounded-b-lg shadow-inner">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 shadow-lg mt-8">
                            <h2 className="text-xl font-bold mb-4 text-purple-400">Order Summary</h2>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-gray-300">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Tax</span>
                                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-4 mt-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-white">Total:</h2>
                                    <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        ${(totalPrice + totalPrice * 0.1).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <div className="sticky bottom-0 bg-gray-900 pt-4 pb-6">
                            <button
                                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={cart.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                            <p className="text-center text-gray-500 text-sm mt-3">Secure checkout powered by Stripe</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart
