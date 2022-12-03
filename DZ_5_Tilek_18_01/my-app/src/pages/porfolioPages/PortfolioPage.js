import React, {useState} from 'react';

function PortfolioPage(props) {


    const [User , SetUser] = useState({works:[]})

    const Pon = () => {
         SetUser ({works:  ["Work1", "Work1"]})
    }

    return (
        <>
            <button onClick={Pon}>get </button>
            <ul>
                <li>{User.works}</li>
                <li>{User.works}</li>
            </ul>
        </>
    );
}

export default PortfolioPage;