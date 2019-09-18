import React from 'react';

import './styles.css';

const SectionList = props => {
    const { content } = props.list;
    
    return (
        <div className="main-container">

          <div className="top-container">
            <select name="select" className="select-export">
              <option value="valor1">Exportar</option> 
            </select>

            <input type="text" className="input-search" placeholder="Pesquisar" />

          </div>

          <div className="list-container">

          <table width="100%" >
            <thead>
              <tr className="header-table">
                <th>Operador</th>
                <th>Abertura de sessão</th>
                <th className="last-th">Fechamento de sessão</th>
              </tr>
            </thead>
            { 
              content.map(c => {
              return (
                <tbody key={c.sessionId}>
                  <tr className="content-table" >
                    <td> { c.userName } </td>
                    <td> { c.startDateTime } </td>
                    <td> { c.endDateTime } </td>
                  </tr>
                </tbody>
                )
              })
            }
          </table> 
         
        </div>

        </div>
    )
}

export default SectionList;
