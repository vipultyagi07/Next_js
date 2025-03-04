import React from 'react'
import { ProductDetail } from '../component/ProductDetail'
import { ProductReview } from '../component/ProductReview'

function page() {
    return (
        <div>
            <h1>
                <ProductDetail></ProductDetail>
                <ProductReview></ProductReview>
            </h1>

        </div>
    )
}

export default page