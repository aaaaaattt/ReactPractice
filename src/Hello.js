import React from 'react';

function Hello({name, color, isSpecial}){

    return <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
        </div>
}

export default Hello;