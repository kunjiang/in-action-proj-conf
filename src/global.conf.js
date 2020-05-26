// 全局配置文件. 可以使用 JSON 文件, 这里使用 js 文件是为了使用注释
module.exports = {
  
  /** 
   * 程序运行模式: 
   * - 开发模式 development, 加载 /config/development.conf.json ( 或 js ) 配置文件
   * - 生产模式 product, 加载 /config/product.conf.json ( 或 js ) 配置文件
   */
  mode: 'development', // product

  /** 
   * 具体配置项, 补充开发或生产配置文件中未提供的配置信息 
   */
  port: 5000


  // 其他自定义配置
  
};