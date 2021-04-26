class AppBootHook {
    constructor(app) {
        this.app = app
        app.logger.info(`服务${app.name}启动, EGG_SERVER_ENV:${app.env}, NODE_ENV:${process.env.NODE_ENV}`)
    }
    /*
     * 此时 config 文件已经被读取并合并，但是还并未生效
     * 这是应用层修改配置的最后时机
     * 注意：此函数只支持同步调用
     */
    configWillLoad() {}
    /*
     * 所有的配置已经加载完毕
     *  可以用来加载应用自定义的文件，启动自定义的服务
     */
    async didLoad() {}
    /*
     * 所有的插件都已启动完毕，但是应用整体还未 ready
     * 可以做一些数据初始化等操作，这些操作成功才会启动应用
     */
    async willReady() {
        // 例如：从数据库加载数据到内存缓存
        // this.app.cacheData = await this.app.model.query(QUERY_CACHE_SQL);
    }
    /* 应用已经启动完毕 */
    async didReady() {
        this.ctx.logger.info('服务启动完毕')
    }
    /*
     * http / https server 已启动，开始接受外部请求
     * 此时可以从 app.server 拿到 server 的实例
     */
    async serverDidReady() {
        this.app.server.on('timeout', socket => {
            // handle socket timeout
        })
    }
}
module.exports = AppBootHook
