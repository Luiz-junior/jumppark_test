import React from 'react';

import './styles.css';

const SectionList = props => {
    const { content } = props.list;
    console.log(content)
    return (
        <div className="list-container">
          <ul>
            <li>Operador</li>
            <li>Abertura de sessão</li>
            { content.map(c => {
              return <li key={c.sessionId}> { c.userName } </li>
            }) }
          </ul>
        </div>
    )
}

export default SectionList;
