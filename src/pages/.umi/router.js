import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/mdsftjoin/Documents/workspace/polari/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__user__login" */ '../user/login'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../user/login').default,
        exact: true,
      },
      {
        name: 'login',
        path: '/user/login2',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__user__login2" */ '../user/login2'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../user/login2').default,
        exact: true,
      },
      {
        name: 'register',
        path: '/user/register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__user__register" */ '../user/register'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../user/register').default,
        exact: true,
      },
      {
        name: 'register',
        path: '/user/register2',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__user__register2" */ '../user/register2'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../user/register2').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__SecurityLayout" */ '../../layouts/SecurityLayout'),
          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
            exact: true,
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Welcome" */ '../Welcome'),
                  LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                    .default,
                })
              : require('../Welcome').default,
            exact: true,
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Admin" */ '../Admin'),
                  LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                    .default,
                })
              : require('../Admin').default,
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Admin" */ '../Welcome'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Welcome').default,
                authority: ['admin'],
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'dashboard',
            icon: 'dashboard',
            path: '/dashboard',
            routes: [
              {
                name: 'analysis',
                icon: 'smile',
                path: '/dashboard/analysis',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__analysis__model.jsx' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/dashboard/analysis/model.jsx').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/analysis'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/analysis').default,
                exact: true,
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/dashboard/monitor',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__monitor__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/dashboard/monitor/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/monitor'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/monitor').default,
                exact: true,
              },
              {
                name: 'workplace',
                icon: 'smile',
                path: '/dashboard/workplace',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__workplace__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/dashboard/workplace/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/workplace'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/workplace').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/form',
            icon: 'form',
            name: 'form',
            routes: [
              {
                name: 'basic-form',
                icon: 'smile',
                path: '/form/basic-form',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__form__basic-form__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/form/basic-form/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../form/basic-form'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../form/basic-form').default,
                exact: true,
              },
              {
                name: 'step-form',
                icon: 'smile',
                path: '/form/step-form',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__form__step-form__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/form/step-form/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../form/step-form'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../form/step-form').default,
                exact: true,
              },
              {
                name: 'advanced-form',
                icon: 'smile',
                path: '/form/advanced-form',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__form__advanced-form__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/form/advanced-form/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../form/advanced-form'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../form/advanced-form').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/list/search',
                name: 'search-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/search').default,
                routes: [
                  {
                    path: '/list/search',
                    redirect: '/list/search/articles',
                    exact: true,
                  },
                  {
                    name: 'articles',
                    icon: 'smile',
                    path: '/list/search/articles',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__search__articles__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/search/articles/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search/articles'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/search/articles').default,
                    exact: true,
                  },
                  {
                    name: 'projects',
                    icon: 'smile',
                    path: '/list/search/projects',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__search__projects__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/search/projects/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search/projects'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/search/projects').default,
                    exact: true,
                  },
                  {
                    name: 'applications',
                    icon: 'smile',
                    path: '/list/search/applications',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__search__applications__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/search/applications/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search/applications'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/search/applications').default,
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                path: '/list/custom',
                name: 'nice-list',
                routes: [
                  {
                    name: 'normal',
                    icon: 'smile',
                    path: '/list/custom/normal',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__custom__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/custom/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/custom/normal'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/custom/normal').default,
                    exact: true,
                  },
                  {
                    name: 'simple',
                    icon: 'smile',
                    path: '/list/custom/simple',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__custom__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/custom/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/custom/simple'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/custom/simple').default,
                    exact: true,
                  },
                  {
                    name: 'complex',
                    icon: 'smile',
                    path: '/list/custom/complex',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__custom__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/custom/model.js').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/custom/complex'),
                          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/custom/complex').default,
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                name: 'table-list',
                icon: 'smile',
                path: '/list/table-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/table-list'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/table-list').default,
                exact: true,
              },
              {
                name: 'basic-list',
                icon: 'smile',
                path: '/list/basic-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__list__basic-list__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/basic-list/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/basic-list'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/basic-list').default,
                exact: true,
              },
              {
                name: 'card-list',
                icon: 'smile',
                path: '/list/card-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__list__card-list__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/list/card-list/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/card-list'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/card-list').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              {
                name: 'basic',
                icon: 'smile',
                path: '/profile/basic',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__profile__basic__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/profile/basic/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../profile/basic'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../profile/basic').default,
                exact: true,
              },
              {
                name: 'advanced',
                icon: 'smile',
                path: '/profile/advanced',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__profile__advanced__model.js' */ '/Users/mdsftjoin/Documents/workspace/polari/src/pages/profile/advanced/model.js').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../profile/advanced'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../profile/advanced').default,
                exact: true,
              },
              {
                name: 'user',
                icon: 'smile',
                path: '/profile/user',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../profile/user'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../profile/user').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'editor',
            icon: 'highlight',
            path: '/editor',
            routes: [
              {
                name: 'flow',
                icon: 'smile',
                path: '/editor/flow',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../editor/flow'),
                      LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../editor/flow').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__404" */ '../404'),
                  LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                    .default,
                })
              : require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('/Users/mdsftjoin/Documents/workspace/polari/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('/Users/mdsftjoin/Documents/workspace/polari/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
