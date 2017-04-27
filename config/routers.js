export default {
  column: [
    {name: 'home',path: '/', title: '首页', icon: 'el-icon-menu'},
    {name: 'manage',path: '/manage', title: '基本信息管理', icon: 'el-icon-setting', child: [
      {name: 'system',path: '/system', title: '系统管理',child: [
        {name: 'addUser',path: '/addUser', title: '添加用户'},
        {name: 'userList',path: '/userList', title: '用户列表'}
      ]},
      {name: 'user',path: '/user', title: '用户管理',child: [
        {name: 'addUser',path: '/addUser', title: '添加用户'},
        {name: 'userList',path: '/userList', title: '用户列表'}
      ]}
    ]},
    {name: 'article',path: '/article', title: '文章管理', icon:'el-icon-document'},
    {name: 'fabric',path: '/fabric', title: 'fabric', icon:'el-icon-time'}
  ]
}
