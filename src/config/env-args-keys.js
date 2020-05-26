/** 
 * 定义可以通过命令行环境变量传入的参数, 约定必须含有 MODE 
 */
const cmdArgKeys = [

  /** 用于定义运行模式, 可取值为 development 或 product */
  'MODE',

  /** 定义监听的端口号 */
  'PORT',

].map( v => v.toUpperCase() );


module.exports = cmdArgKeys;