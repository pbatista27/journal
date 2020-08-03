import React from 'react'

export const LoadingScreen = () => {
    return (

        <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'100%',marginTop:'40%'}}>
            <div className="spinner-border text-success " style={{width:'9rem', height: '9rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};
