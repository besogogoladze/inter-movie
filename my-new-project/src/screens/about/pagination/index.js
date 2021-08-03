import React from 'react'

function Pagination({postPerPage, totalPosts}) {

    const pageNumbers = []; 

    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {
                pageNumbers.map(number => (<div key={number}>{number}</div>))
            }
        </div>
    )
}

export default Pagination;
