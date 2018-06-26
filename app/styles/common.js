import {
    Dimensions
} from 'react-native'
import {px2dp} from "../utils";

export const common={
    f1:'#f1f1f1',
    fff:'#fff',
    gary_e:'#e5e5e5',
    gary_9:'#999',
    gary_6:'#666',
    gary_3:'#333',
    gary_2:'#222',
    gray_back:'#313131',
    theme:'#E02521',
    theme_2: '#DE0E23',
    font_lg:px2dp(18),
    font_md:px2dp(14),
    font_sm:px2dp(12),

    font_h1:{
        fontSize:px2dp(18),
        fontWeight:'bold',
    },
    font_h2:{
        fontSize:px2dp(14),
        fontWeight:'100',
    },
    font_h3:{
        fontSize:px2dp(12),
        fontWeight:'100',
    },

};

export const deviceWidth = Dimensions.get('window').width; // 设备的宽度
export const deviceHeight = Dimensions.get('window').height;// 设备的高度