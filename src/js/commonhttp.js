import wepy from 'wepy';

function commonhttp(){
    //this.api = 'https://xiaochengxu.quandashi.com/'; /* api地址 */
    this.api = 'https://pre-xcx.quandashi.com/'; /* pre-api地址 */
    this.tmUrl = 'https://tm-images.oss-cn-beijing.aliyuncs.com/'; /* 文件地址 */
    this.fileUrl = 'http://files.quandashi.com/'; /* 文件地址 */
    this.data = {
        map: {},
        appKey: 'quandashi2151283371',
        timestamp: new Date().getTime(), 
        signMethod: 'md5',
        ip: '127.0.0.1',
        //sign: '46BA04E77F1F121A6198F60E873F254',
        //oldVersion: 1,
        executor: '5a7234566f6a7855736d6973687334487366677079773d3d',
        v: "1.0"
    };
    this.uploadFile = function(param,tempFilePaths,callback,fail){
        let that = this;
        wx.uploadFile({
            url: 'https://pre-xcx.quandashi.com/global/uploadFiles', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'files',
            formData: param, 
            success: function(res){
                callback(res);
            },
            fail: function(){
                fail();
            }
        });
    };
    this.ajax = function (param, success, fail, complete,type ='POST'){
        let that = this;
        let token = wx.getStorageSync('token');//获取token
        wx.request({
            url: that.api + param.method,
            header: {
                'token': token
            },
            data: param,
            method: type,
            success: function (res) {
                //console.log(res);
                if (res.statusCode == 200 && res.data.code==9050){
                    wx.clearStorageSync();
                    wx.showModal({
                        title: '',
                        content: res.data.message,
                        showCancel: false,
                        confirmText: '我知道了',
                        success: function (res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '../../login/login'
                                });
                            } 
                        }
                    }); 
                }else{
                    success(res);
                }
            },
            fail: function(){
                fail();
            },
            complete: function(){
                complete();
            }
        });
    };
    this.jiamiPW = function (str) {
        let arr = str.split('');
        let result = '';
        arr.map(function (v, i) {
            let a = v.charCodeAt();
            let b = 't'.charCodeAt();
            result += String.fromCharCode(a ^ b);
        });
        return result;
    };
}

export default commonhttp