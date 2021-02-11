import React from 'react'
import loadingGif from '../assets/images/loader.gif'

const LoadingPage = () => (
    <div className="loader">
        <img className="loader__image" alt="loading gif" src={loadingGif} />
    </div>
)

export { LoadingPage as default }