import { useContext, useState } from "react";

import { useInView } from "react-intersection-observer";
import CartContext from "../context/CartContext";

function Header() {

    const [cartItems] = useContext(CartContext)
    const [searchInView, setSearchInView] = useState(false)

    const [ref, inView] = useInView({
        threshold: 0,
    })

    const toggleSearchView = () => {
        setSearchInView(() => !searchInView)
    }

    const hideSearchView = () => {
        setSearchInView(false)
    }

    return (
        
    )

}

export default Header