import React from 'react'

async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {

    
/** 
    // let url --> http://localhost:3000/docs/1/33

    const resolvedParams = await params; // Resolving the Promise
    console.log("Print resolvedParams",resolvedParams); // Output --> Print resolvedParams {slug: [ '1', '33' ]}

    const slug = resolvedParams.slug; // Extracting slug from the resolved object
    console.log("Print slug",slug); // --> Print slug [ '111', '3343' ]

**/
    // note: above one is same  as line number 18

    const { slug } = await params; //console.log("Print slug",slug)  Output -->  Print slug [ '111', '3343' ]





    // this is just a logic, it is not something generic

    
    // Helper function to check if a string contains a number
    const hasNumber = (str: string) => /\d/.test(str);
    // /\d/ is a regular expression that matches any digit (0-9)
    // .test(str) returns `true` if the string contains at least one number

    // Case 1: If the URL has exactly two segments (feature and concept)
    // and both segments contain numbers, return a message with both values
    if (slug?.length === 2 && hasNumber(slug[0]) && hasNumber(slug[1])) {
        return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>;
    }
    
    // Case 2: If the URL has exactly one segment and it contains a number,
    // it is considered a feature
    else if (slug?.length === 1 && hasNumber(slug[0])) {
        return <h1>Viewing docs for feature {slug[0]}</h1>;
    }

    // Default case: If none of the above conditions match, show the homepage
    return <h1>Docs home page</h1>;
}

// Exporting the DocsPage component for use in other files
export default DocsPage;