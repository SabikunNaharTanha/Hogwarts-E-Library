import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2>Difference between state and props: </h2>
            <p>1. State is changeable but props can not be changed.</p>
            <p>2. States changes can be asynchronous but props are read only.</p>

            {/* <h2>How React works:</h2>
            <p></p> */}

            <h2>How useState() works:</h2>
            <p>The useState() is used to cope up with the changes of states in the data. The useState() returns array in output. So, we need to declare a parameter and a function as a array while defining their state.</p>
        </div>
    );
};

export default Questions;