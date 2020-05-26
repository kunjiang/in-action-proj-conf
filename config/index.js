// 挂载配置信息, 导出配置对象.


const rnum = /^\d+$/;
function _checkValue ( v ) {
  if ( rnum.test( v ) ) {
    return parseInt( v );
  } 
  return v;
}


// 最低优先级的全局配置
let globalConfig = require( '../global.conf' );
let { mode } = globalConfig;

// 基于命令行环境变量
const cmdArgKeys = require( './env-args-keys' );
const env = process.env;

// 命令行具有最高优先级
if ( env.MODE && ( env.MODE === 'product' || env.MODE === 'development' ) ) {
  mode = env.MODE;
}

const isProduct = mode === 'product';

// 读取第二优先级的文件配置
const _config = isProduct 
  ? require( './product.conf' )
  : require( './development.conf' );


// 开始混入
globalConfig = Object.assign( globalConfig, _config );
// globalConfig = Object.assign( globalConfig, cmdArgKeys.reduce( ( kv, k ) => ( env[ k ] && ( kv[ k.toLowerCase() ] = env[ k ] ), kv ), {} ) );
globalConfig = Object.assign( globalConfig, cmdArgKeys.reduce( ( kv, k ) => {
  if ( k in env && env[ k ] !== undefined ) { 
    kv[ k.toLowerCase() ] = _checkValue( env[ k ] );
  }
  return kv;
}, {} ) );


// 导出
module.exports = globalConfig;