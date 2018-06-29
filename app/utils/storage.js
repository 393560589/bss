import Storage from 'react-native-storage'
import {AsyncStorage} from 'react-native'

let storage = new Storage({
    size:1000,
    storageBackend:AsyncStorage,
    defaultExpires:null,//永不过期
    enableCache:true, // 读写内存自动获得缓存数据
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入

});
function empty(){}

export default AsyncStorageUtil = {

    /**
     * 读取本地数据
     * @params key 保存关键字
     * @params callback 成功获取数据后的回调函数
     * @params toLoginFunc 获取用户登录信息没存在或失效时，执行的回调函数
     */
    load(key, callback, toLoginFunc = empty){
        let that = this;

        storage.load({
            key: key
        }).then(ret => {
            callback(ret);
        }).catch(err => {
            switch (err.name) {
                case 'NotFoundError':
                    console.log('未找到数据');
                    toLoginFunc();
                    break;
                case 'ExpiredError':
                    console.log('数据过期');
                    toLoginFunc();
                    break;
            }
        });
    },

    /**
     * 保存值
     * @param key 关键字
     * @param data 要保存的数据data => {city: ''}
     */
    save(key, data){
        storage.save({
            key: key,
            data: data
        });
    },

    /**
     * 删除本地数据
     * @params key 保存关键字
     */
    remove(key){
        storage.remove({
            key: key
        });
    }

};




global.storage = storage;