import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
import Login from '@/pages/login/'
import Pages from '@/pages/'
import PageError from '@/pages/error/'
import './App.css'
// import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={locale}>
      <BrowserRouter>
        <Switch>
          <Route path='/page' component={Pages} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/error' component={PageError} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
