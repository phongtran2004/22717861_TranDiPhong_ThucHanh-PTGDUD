import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/shoppingSlice';
import { Trash2, Plus, Minus, Package } from 'lucide-react';

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Item Image with Fallback */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-purple-100 dark:bg-purple-900/20 rounded-lg overflow-hidden">
                    {item.image ? (
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Package className="w-12 h-12 text-purple-300 dark:text-purple-700" />
                        </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        <Package className="w-12 h-12 text-purple-300 dark:text-purple-700" />
                    </div>
                </div>

                {/* Item Details */}
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">${item.price.toFixed(2)} each</p>
                    <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-center sm:justify-start">
                            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-10 text-center font-medium text-gray-800 dark:text-white py-1">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Subtotal */}
                        <div className="text-gray-700 dark:text-gray-300 font-medium">
                            Subtotal: <span className="text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Remove Button */}
                <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    aria-label="Remove item"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
