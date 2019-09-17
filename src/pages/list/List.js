import React, { Component } from 'react';

// import { Container } from './styles';
import SectionList from '../../components/sectionList/SectionList';
import api from '../../services/api';

class List extends Component {

    state = {
        list: [],
        loading: true,
        error: '',
    };

    async componentDidMount() {
        try {
            const response = await api.get('/data');
            this.setState({ list: response.data, loading: false });
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    render() {
        const { list, loading } = this.state;

        if(loading) 
            return <h1>Carregando...</h1> 
        else {
            return <SectionList list={list} />
        }
            
            
    }
}

export default List;
