import React from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import Result from './containers/Result/Result';
import Spinner from './components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

const App = props => {
    let results = <Spinner />;
    if (!props.loading) {
        results = <Result />;
    }
    return (
        <React.Fragment>
            <Layout>
                <Search />
                {results}
            </Layout>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        displayResult: state.result.displayResult,
        loading: state.result.loading
    };
};

export default connect(mapStateToProps)(React.memo(App));
