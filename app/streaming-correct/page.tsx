import React from 'react'
import { ProductDetail } from '../component/ProductDetail'
import { ProductReview } from '../component/ProductReview'
import { Suspense } from 'react'

function page() {
    return (
        <div>
            <h1>
                <Suspense fallback={<h1> ProductDetail loading......</h1>}>

                    <ProductDetail></ProductDetail>

                </Suspense>

                <Suspense fallback={<h1> ProductReview loading......</h1>}>

                    <ProductReview></ProductReview>

                </Suspense>
            </h1>

        </div>
    )
}

export default page