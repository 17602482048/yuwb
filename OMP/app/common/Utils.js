/**
 * 访问工具类
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import md5 from 'react-native-md5'; 
import { 
    Alert,InteractionManager,Navigator,
    
} from 'react-native';

import UserDefaults from '../common/UserDefaults'; 
import Common from '../common/constants';

let isPromptNetwork = true;
let Util = {
    /**
     * fetchApi简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     * isNoNetworkCache: 断网时是否取缓存  默认值：true（如果isFetchCache为true时默认值为false）
     * isFetchCache: 是否优先取缓存        默认值：false
     *
     */
    get: (url, successCallback, failCallback, isNoNetworkCache, isFetchCache) => {
        if (url) {
            let urlStr = url;
            let hex_md5v = '';
            // 数据签名 公钥
            const publickey = '-Xcs8JGeenpOqjyowisGBIQQM7beBOY6Ij6v6yn2vqOpjDB4R_WgjA';
            let isParam = url.indexOf('?');
            if (isParam > 0 ) {
                urlStr = url.substring(isParam+1);
                hex_md5v = md5.hex_md5(urlStr+"&app_secret="+publickey);
                url = url+'&sign='+hex_md5v; 
            }else{
                hex_md5v = md5.hex_md5("app_secret="+publickey);
                url = url+'?sign='+hex_md5v;
            } 
            console.log(url);
        }

        //判断此请求是否优先取缓存
        // if (isFetchCache) {

        // } else {
            //默认在断网时取缓存
            if (isNoNetworkCache == undefined) { 
                isNoNetworkCache = true;
            }
            // 直接fetch
            Util.fetchApi(url, successCallback, failCallback, isNoNetworkCache);
        // }
    },

    /**
     * fetch简单封装
     * url: 请求的URL
     * successCallback: 请求成功回调
     * failCallback: 请求失败回调
     * isNoNetworkCache: 断网时是否取缓存
     *
     */
    fetchApi: (url, successCallback, failCallback, isNoNetworkCache) => {

        let text = "";
        fetch(url)
            .then((response) => 
            response.text())
            .then((responseText) => {
                //转义json数据中的特殊字符
                responseText = Util._decodeHTMLEntities(responseText);
                text = JSON.parse(responseText);
                if (!(text.state == 0)) {
 
                  
                    if (failCallback != undefined) {
                        failCallback(text);
                    }
                    return;
                }
                successCallback(text);
                //存入请求缓存
                //text = Mock.mock(text); 
            })
            .catch((err) => {
                //无网络
                if ('TypeError: Network request failed' == err) {
                  
                    //断网时是否请求缓存
                    if (isNoNetworkCache) {
                        if (isPromptNetwork) {
                            Alert.alert(
                                '警告',
                                "请确认网络连接！",
                                [
                                    {text: '确定', onPress: () => isPromptNetwork = true},
                                ]
                            );
                            isPromptNetwork = false;
                        }

                    } else {
                        failCallback(err);
                    }
                } else { 
                    
                    failCallback(err);
                    // console.log(' Util Network error: ' + err);
                }
            });
    },

    /**
     * 转义json数据中的特殊字符
     * @param responseText  转换前的json文本
     * @returns responseText 转换后的json文本
     * @private
     */
    _decodeHTMLEntities: (responseText) => {
        return (
            responseText.replace(/&nbsp;/g, " ")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, "\\\"")
                .replace(/&ldquo;/g, "“")
                .replace(/&rdquo;/g, "”")
                .replace(/&hellip;/g, "…")
                .replace(/&amp;/g, "&")
                .replace(/&mdash;/g, "—")
                .replace(/&middot;/g, "·")
        );
    }

};

export default Util;