import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

import ProductCard from './ProductCard'

import {
    allProductsCategoryData,
    sunglassesCategoryData,
    eyeglassesCategoryData
} from '../data/productCategoryData'

import sortProducts from '../utils/sortProducts'

function ProductGallery({ categoryType }) {

    return <p>testes</p>
}

ProductGallery.propTypes = {
    categoryType: PropTypes.string.isRequired
}

export default ProductGallery