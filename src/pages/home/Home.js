import React, { Component } from 'react';

import './styles.css';
import List from '../list/List';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="card">
                <List />
            </div>

            <div className="footer">
              <h3>Todos os direitos reservados a Jump Tecnologia | 2019 &copy;</h3>
            </div>
        </div>
    );
  }
}

export default Home;
