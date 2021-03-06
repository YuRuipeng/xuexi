module.exports={//es6导出
    // 配置入口文件
    entry:'./main.js',
    // 配置输出位置
    output:{
        path:__dirname,//项目根路径
        filename:'build.js'
    },
    // 配置模块加载器
    module:{
        rules: [
            {
                test:/\.vue$/,//匹配所有以.vue结尾的文件以vue-loader去加载
                loader:'vue-loader'
            },
            {
                test:/\.js$/,//所有以.js结尾的文件都由babel-loader来加载,除了node_modules以外
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}