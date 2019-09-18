import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SectionList from '../../components/sectionList/SectionList';
import api from '../../services/api';
import { requestSections, error } from '../../store/actions/sectionsAction';

class List extends Component {

    state = {
        list: [],
        loading: true,
        error: '',
    };

    async componentDidMount() {
        this.props.requestSections();
    }

    onEnterSearch = (e) => {
        const enterKey = 13;
        if (e.which === enterKey)
            console.log(e.target.value);
    };

    render() {
        
        const { sections, loading } = this.props.fetchSections;
        //console.log(this.props.fetchSections)

        if(loading) 
            return <h3>Carregando...</h3> 
        else {
            return <SectionList sections={sections} onEnter={this.onEnterSearch} />
        }       
    }
}

const mapStateToProps = state => ({
    fetchSections: state.fetchSections,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSections, error }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
