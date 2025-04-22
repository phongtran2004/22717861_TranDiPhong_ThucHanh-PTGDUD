import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, LogIn } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 border-b border-purple-100 dark:border-purple-900 shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex-shrink-0 font-bold text-xl text-purple-600 dark:text-purple-400">
                        <Link
                            to="/"
                            className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                            MyApp
                        </Link>
                    </div>

                    {/* Navigation links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink
                            to="/counter-app"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-600 dark:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            }
                        >
                            CounterApp
                        </NavLink>
                        <NavLink
                            to="/todolist"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-600 dark:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            }
                        >
                            TodoList
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-600 dark:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
                                    : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            }
                        >
                            Products
                        </NavLink>
                    </nav>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Theme toggle switch */}
                        <div className="relative inline-flex items-center">
                            <div className="relative">
                                <input type="checkbox" id="theme-toggle" className="sr-only peer" />
                                <label
                                    htmlFor="theme-toggle"
                                    className="flex h-7 w-12 cursor-pointer items-center rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors duration-300 ease-in-out peer-checked:bg-purple-200 dark:peer-checked:bg-purple-800"
                                >
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out peer-checked:translate-x-5 dark:bg-gray-800">
                                        <Sun className="h-3 w-3 text-amber-500 peer-checked:hidden" />
                                        <Moon className="h-3 w-3 text-purple-400 hidden peer-checked:block" />
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Login button */}
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm hover:shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            <LogIn className="h-4 w-4 mr-2" />
                            Login
                        </button>
                    </div>

                    {/* Mobile menu button - shows on small screens */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;