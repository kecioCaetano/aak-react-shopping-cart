import { useState, useRef, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import ProductBanner from "../components/ProductBanner"
import ProductSidebar from "../components/ProductSidebar"
import ScrollToTop from "../components/ScrollToTop";

function ProductGalleryLayout() {

    const [bannerContent, setBannerContent] = useState({ title: '', description: '', img: '', imgCompressed: '', imgAlt: '' })
    const [productSort, setProductSort] = useState('recomended')
    const [currentPage, setCurrentPage] = useState(1)

    const productsRef = useRef(null)
    const [search, setSearch] = useSearchParams()

    const handleProductSort = (e) => {
        setProductSort(() => e.target.value)
        setSearch(() => ({ page: 1 }))
    }

    useEffect(() => {
        setCurrentPage(() => search.get('page') || 1)
    }, [search])

    return (
        <div className="Screen-product">
            <ProductBanner content={bannerContent} />
            <div className="product--wrapper">
                <ProductSidebar />
                <main className="products" ref={productsRef} >
                    <div className="products-sorter">
                        <label htmlFor="product-sort" className="products-sorter__label">
                            Sort by:
                            <select name="productSortOrder"
                                id="product-sort"
                                className="products-sorter__selection"
                                defaultValue="recommended"
                                onChange={handleProductSort} >
                                <option value="recommended">Recommended</option>
                                <option value="alphabetical-ascending">Alphabetical: A-Z</option>
                                <option value="alphabetical-descending">Alphabetical: Z-A</option>
                                <option value="price-ascending">Price: Low to High</option>
                                <option value="price-descending">Price: High to Low</option>
                            </select>
                        </label>
                    </div>
                    <section className="products-display">
                        <Outlet context={{
                            setBannerContent,
                            productSort,
                            productsRef,
                            setSearch,
                            currentPage
                        }} />
                    </section>
                </main>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default ProductGalleryLayout