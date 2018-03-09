/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';

import App from './containers/App';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}