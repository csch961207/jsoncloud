const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需加载 antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。
  addLessLoader({
    lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    },
  }),
);