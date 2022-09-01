import React from 'react';

const FilterItem = ({ label, children }) => {

    return (
        <div className="col-12 d-flex align-items-center">
            <div className="col-6 h-100 d-flex align-items-center justify-content-center">
                <span className="label">{ label }</span>
            </div>
            <div className="col-6 h-100 d-flex align-items-center">
                {
                    children
                }
            </div>
        </div>
    );
};

export default FilterItem;
