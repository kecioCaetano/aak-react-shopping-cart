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
                    <nav className="pd-pg__nav">
                        <Link to="/" className="pd-pg__nav-link">HOME</Link>
                        {' '}/
                        {
                            product.type === 'sunnies'
                                ? (<Link to='/products/sunglasses' className="pd-pg__nav-link">Sunglasses</Link>)
                                : (<Link to='/products/eyeglasses' className="pd-pg__nav-link">Eyeglasses</Link>)
                        }{' '}/
                        <span className="pd-pg__nav-link">{product.brand}</span>
                    </nav>
                    <div className="pd-pg__img--wrapper">
                        <ImageWrapper>
                            {
                                activeImg === 1
                                    ? (<img src={product.img.main} alt={`${product.tile} front view`} className="pd-pg__active-img" />)
                                    : (<img src={product.images.side} alt={`${product.title} side view`} className="pd-pg__active-img" />)
                            }
                        </ImageWrapper>
                        <div className="pd-pg__img-thumbs">
                            <button
                                className={`pd-pg__img-thumbnail--wrapper ${activeImg === 1 ? 'active' : ''
                                    }`}
                                type="button"
                                onClick={() => setActiveImg(1)}
                            >
                                <img
                                    src={product.images.main}
                                    alt={`${product.title} front view`}
                                    className="pd-pg__img-thumbnail"
                                />
                            </button>
                            <button
                                className={`pd-pg__img-thumbnail--wrapper ${activeImg === 2 ? 'active' : ''
                                    }`}
                                type="button"
                                onClick={() => setActiveImg(2)}
                            >
                                <img
                                    src={product.images.side}
                                    alt={`${product.title} side view`}
                                    className="pd-pg__img-thumbnail"
                                />
                            </button>

                        </div>
                    </div>
                </section >
                <section className="pd-pg__details--container">
                    <h1 className="pd-pg__title">{product.title}</h1>
                    <div className="pd-pg__price--wrapper">
                        <h3 className="pd-pg__price">{product.price}</h3>
                        {product.onSale && (
                            <h3 className="pd-pg__og-price">{product.originalPrice}</h3>
                        )}
                    </div>
                    <div className="pd-pg__details">
                        <p className="pd-pg__description">{product.description}</p>
                        <ul className="pd-pg__tech-details">
                            {product.technicalDetails.map((td) => (
                                <li className="pd-pg__tech-detail" key={td}>{td}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pd-pg__opt-details">
                        {product.color && (
                            <div className="pd-pg__color--wrapper">
                                <span className=" pd-pg__opt-label pd-pg__color-label">
                                    Color:{' '}
                                </span>
                                <span className="pd-pg__color">{product.color}</span>
                            </div>
                        )}
                        {product.quantity > 0 ? (
                            <form onSubmit={addToCart} noValidate>
                                <label htmlFor="pd-quantity" className="pd-pg__opt-label pd-pg__quantity-label">
                                    Quantity:
                                    <div className="pd-pg__quantity-wrapper">
                                        <button type='button' className="pd-pg__quantity-btn" onClick={decrement} disabled={desiredQty <= 1}>-</button>
                                        <input type="number" className="pd-pg__quantity-input" name="pd-quantity" id="pd-quantity"
                                            max={product.quantity} min={1} onChange={handleDesiredQty} value={desiredQty} />
                                        <button type="button" className="pd-pg__quantity-btn" disabled={desiredQty >= product.quantity} onClick={increment} >+</button>
                                    </div>
                                </label>
                                <button className="pd-pg__btn-card pd-pg__btn-add-cart" type="submit" >Add to Cart</button>
                                {itemInCart && (
                                    <motion.div initial={{ scaleY: 0, opacity: 0 }}
                                        animate={{ scaleY: 1, originY: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}>
                                        <Link to="/cart" className="pd-pg__btn-cart pd-pg__btn-checkout">Buy it now</Link>
                                    </motion.div>
                                )}
                                {errorMessage && (
                                    <span className="pd-pg__error">{errorMEssage}</span>
                                )}
                            </form>
                        ) : (
                            <div className="pd-pg__quantity-sold-out">
                                Item is currently sold out. Keep posted for updates!
                            </div>
                        )}
                    </div>
                </section>
            </main >
            <section>b</section>
        </>
    )
}