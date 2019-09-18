import React from 'react';

import './styles.css';
import { convertDate } from '../../utils/commons';

const SectionList = props => {
    const { content } = props.sections;
    
    return (
        <div className="main-container">

          <div className="top-container">
            <select className="select-export" onChange={e => { console.log('selecionado: ', e.target.value) }} >
              <option value="exportar">Exportar</option> 
              <option value="CSV">CSV</option> 
              <option value="PDF">PDF</option> 
            </select>

            <input 
              type="text" 
              className="input-search" 
              placeholder="Pesquisar" 
              onKeyUp={props.onEnter}
            />
          </div>

          <div className="list-container">

          <table width="100%" >
            <thead>
              <tr className="header-table">
                <th>Operador</th>
                <th>Abertura de sessão</th>
                <th>Fechamento de sessão</th>
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
