import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// 布局组件
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'

// 路由组件
import Home from './home'
import UserList from './user-manage/UserList'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu />
      <TopHeader />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user-manage/user/list" component={UserList} />
        <Route path="/right-manage/right/list" component={RightList} />
        <Route path="/right-manage/role/list" component={RoleList} />

        <Redirect from="/" to="/home" />
        <Route path="*" component={() => <div>404</div>} />
      </Switch>
    </div>
  )
}
