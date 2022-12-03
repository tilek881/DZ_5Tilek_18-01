import React, {useState} from 'react';

function ContactsPage(props) {


    const [ texting  ,setTexting ] = useState({input: ""})


    const useEffect = (event) => {
        setTexting( {input:event.target.value})
    }


    const useEffects = () => {
        setTexting({input: ""})
    }


    const addProduct = () => {
        console.log(setTexting)
    }



    return (
        <>
            <input
                type="text"
                value={texting.input}
                onChange={useEffect}
            />
            <button onClick={addProduct}>add</button>
            <button onClick={() => setTexting({input:""})}>clear</button>
        </>
    );
}

export default ContactsPage;