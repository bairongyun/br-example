import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '@/pages/index/'

const PagesRouter = () => {
    return (
        <Switch>
            <Route exact path='/page/index' component={Index} />
        </Switch>
    );
}


export default PagesRouter