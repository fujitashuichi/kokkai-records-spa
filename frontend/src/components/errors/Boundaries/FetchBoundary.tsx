import React from 'react'

function FetchBoundary({ children }: { children: React.ReactNode }) {


    return (
        <>{children}</>
    )
}

export default FetchBoundary
