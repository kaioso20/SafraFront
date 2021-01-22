import ListSafra from './../pages/listSafra/listSafra'
import FormSafra from './../pages/formSafra/formSafra'

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ListSafra} />
                <Route path='/cadastro' component={FormSafra} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes