export const API = {
    login:'login/codeLogin',  //post  phone code
    banner:'banner',
    goods:'goods', // get type sort
    detail:'goods/detail', //get id
    code:'code',
    user:'user',  // get
    editname:'user', // put
    address:'user/address', //put  type list 地址列表
    shopping:'shopping',   // post
    del:'shopping/cart',
    add:'shopping/cart',  //post type goods_id num
    order:'order/add', //
    bill:'user/bill', // post
    jiesuan:'shopping/jiesuan',  //post
    orderlist:'order/index', //post
    tointer:'papers/tointegral', // post amount
    redlist:'papers/list', // 兑换券列表  get
    redstack:'papers/tostack', // 兑换兑换码 //post id
    stackchange:'papers/stacktointegral', // 兑换码换积分
    redsecond:'papers/second', // get
    stactlist:'papers/usestocklist', // post
    stocklist:'papers/stocklist',  //get
    ordertail:'order/detail', // get
    pay:'pay', // post id / paytype
    wechat:'Wechat/getsignature', // post
    invition:'user/friend', // post
    getcount:'Papers/bagbalance', // get 获得抽奖次数
    detaillist:'goods/detaillist', // 购买记录
    jifen:'papers/paperlist', // 积分列表
    take:'order/takeover' // 确定收货
};
export const StringName={
    USER_INFO:'USERINFO'  //储存登录字段，加密用
}