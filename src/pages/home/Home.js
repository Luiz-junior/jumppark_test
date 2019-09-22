import React, { Component } from 'react';

import './styles.css';
import List from '../list/List';
import Footer from '../../components/footer/Footer';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="card">
                <List />
            </div>

            <Footer />
        </div>
    );
  }
}

export default Home;
