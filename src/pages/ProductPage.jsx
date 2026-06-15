import { useState, useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import CartContext from "../context/CartContext";
import ImageWrapper from "../components/ImageWrapper";
import ScrollToTop from "../components/ScrollToTop";

import { allProductsData } from "../data/productData";

const emptyProduct = {
    id: '',
    brand: '',
    title: '',
    price: '',
    originalPrice: '',
    description: '',
    technicalDetails: [],
    type: '',
    color: '',
    quantity: '',
    onSale: '',
    images: {
        main: '',
        side: ''
    }
}

function ProductPage() {
    const { productId } = useParams()

    const { cartItems, setCartItems } = useContext(CartContext)

    const [product, setProduct] = useState(emptyProduct)
    const [activeImg, setActiveImg] = useState(1)
    const [desiredQty, setDesiredQty] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')
    const [itemInCart, setItemInCart] = useState(false)

    const increment = () => setDesiredQty((prev) => Math.min(prev + 1, product.quantity))
    const decrement = () => setDesiredQty((prev) => Math.max(1, prev - 1))

    const ERROR_MESSAGE = 'We do not have enough stocks for your current order. ' +
        'Contact us directly to get more information'

    useEffect(() => {
        document.title = `${product.title.toUpperCase()} | Savant eyewear online store.`
    }, [product.title])

    useEffect(() => {
        const target = allProductsData.find((p) => p.id === productId)
        setProduct(() => target || emptyProduct)
    }, [productId])

    useEffect(() => {
        const isInCart = cartItems.find((ci) => ci.itemId === productId)
        if (isInCart) setItemInCart(true)
    }, [cartItems, productId])

    useEffect(() => {
        setTimeout(() => setErrorMessage(''), 7500)
    }, [errorMessage])

    // const handleDesiredQty
    // const updateQuantity
    // const addNewItem
    // const addToCart

    return (
        <>
            <main className="pd-pg">
                <section className="pd-pg__img--container">
                    <nav to="/" className="pd-pg__nav">HOME
                        <Link>{' '}/

                        </Link>
                    </nav>
                    <div></div>
                </section>
                <section className="pd-pg__details--container">a</section>
            </main>
            <section>b</section>
        </>
    )
}