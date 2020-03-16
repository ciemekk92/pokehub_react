import React from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import Result from './containers/Result/Result';
import Spinner from './components/UI/Spinner/Spinner';
import Landing from './components/UI/Landing/Landing';
import Footer from './components/UI/Footer/Footer';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import transitionClasses from './containers/Result/Result.module.css';

const App = props => {
    let results = <Spinner />;
    if (!props.loading) {
        results = <Result />;
    }
    return (
        <React.Fragment>
            <Layout>
                <Search />

                {!props.loaded ? (
                    <Transition in={!props.loaded} timeout={300} mountOnEnter>
                        {state => (
                            <div
                                className={`${transitionClasses.Box} ${
                                    state === 'entering'
                                        ? transitionClasses.ResultOpen
                                        : state === 'entered'
                                        ? transitionClasses.ResultVisible
                                        : state === 'exiting'
                                        ? transitionClasses.ResultClosed
                                        : state === 'exited'
                                        ? transitionClasses.ResultNotVisible
                                        : null
                                }`}
                            >
                                <Landing />
                            </div>
                        )}
                    </Transition>
                ) : null}
                {results}
                <Footer />
            </Layout>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        displayResult: state.result.displayResult,
        loaded: state.result.loaded,
        loading: state.result.loading
    };
};

export default connect(mapStateToProps)(React.memo(App));
