import ListSafra from './../pages/listSafra/listSafra'
import FormSafra from './../pages/formSafra/formSafra'

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={ListSafra} />
                <Route path='/cadastro' render={FormSafra} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes