'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commonhttp() {
    //this.api = 'https://xiaochengxu.quandashi.com/'; /* api地址 */
    this.api = 'https://pre-xcx.quandashi.com/'; /* pre-api地址 */
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
    this.uploadFile = function (param, tempFilePaths, callback, _fail) {
        var that = this;
        wx.uploadFile({
            url: 'https://pre-xcx.quandashi.com/global/uploadFiles', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'files',
            formData: param,
            success: function success(res) {
                callback(res);
            },
            fail: function fail() {
                _fail();
            }
        });
    };
    this.ajax = function (param, callback, _fail2) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'POST';

        var that = this;
        var token = wx.getStorageSync('token'); //获取token
        wx.request({
            url: that.api + param.method,
            header: {
                'token': token
            },
            data: param,
            method: type,
            success: function success(res) {
                //console.log(res);
                if (res.statusCode == 200 && res.data.code == 9050) {
                    wx.clearStorageSync();
                    wx.showModal({
                        title: '',
                        content: res.data.message,
                        showCancel: false,
                        confirmText: '我知道了',
                        success: function success(res) {
                            if (res.confirm) {
                                wx.navigateTo({
                                    url: '../../login/login'
                                });
                            }
                        }
                    });
                    wx.navloading('close');
                    wx.loading('close');
                } else {
                    callback(res);
                }
            },
            fail: function fail() {
                _fail2();
            }
        });
    };
    this.jiamiPW = function (str) {
        var arr = str.split('');
        var result = '';
        arr.map(function (v, i) {
            var a = v.charCodeAt();
            var b = 't'.charCodeAt();
            result += String.fromCharCode(a ^ b);
        });
        return result;
    };
}

exports.default = commonhttp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbmh0dHAgLSDlia/mnKwuanMiXSwibmFtZXMiOlsiY29tbW9uaHR0cCIsImFwaSIsImZpbGVVcmwiLCJkYXRhIiwibWFwIiwiYXBwS2V5IiwidGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJzaWduTWV0aG9kIiwiaXAiLCJleGVjdXRvciIsInYiLCJ1cGxvYWRGaWxlIiwicGFyYW0iLCJ0ZW1wRmlsZVBhdGhzIiwiY2FsbGJhY2siLCJmYWlsIiwidGhhdCIsInd4IiwidXJsIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJzdWNjZXNzIiwicmVzIiwiYWpheCIsInR5cGUiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsInN0YXR1c0NvZGUiLCJjb2RlIiwiY2xlYXJTdG9yYWdlU3luYyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsIm5hdmxvYWRpbmciLCJsb2FkaW5nIiwiamlhbWlQVyIsInN0ciIsImFyciIsInNwbGl0IiwicmVzdWx0IiwiaSIsImEiLCJjaGFyQ29kZUF0IiwiYiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLFVBQVQsR0FBcUI7QUFDakI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsZ0NBQVgsQ0FGaUIsQ0FFNEI7QUFDN0MsU0FBS0MsT0FBTCxHQUFlLDZCQUFmLENBSGlCLENBRzZCO0FBQzlDLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxhQUFLLEVBREc7QUFFUkMsZ0JBQVEscUJBRkE7QUFHUkMsbUJBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSEg7QUFJUkMsb0JBQVksS0FKSjtBQUtSQyxZQUFJLFdBTEk7QUFNUjtBQUNBO0FBQ0FDLGtCQUFVLGtEQVJGO0FBU1JDLFdBQUc7QUFUSyxLQUFaO0FBV0EsU0FBS0MsVUFBTCxHQUFrQixVQUFTQyxLQUFULEVBQWVDLGFBQWYsRUFBNkJDLFFBQTdCLEVBQXNDQyxLQUF0QyxFQUEyQztBQUN6RCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR04sVUFBSCxDQUFjO0FBQ1ZPLGlCQUFLLGtEQURLLEVBQytDO0FBQ3pEQyxzQkFBVU4sY0FBYyxDQUFkLENBRkE7QUFHVk8sa0JBQU0sT0FISTtBQUlWQyxzQkFBVVQsS0FKQTtBQUtWVSxxQkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCVCx5QkFBU1MsR0FBVDtBQUNILGFBUFM7QUFRVlIsa0JBQU0sZ0JBQVU7QUFDWkE7QUFDSDtBQVZTLFNBQWQ7QUFZSCxLQWREO0FBZUEsU0FBS1MsSUFBTCxHQUFZLFVBQVVaLEtBQVYsRUFBaUJFLFFBQWpCLEVBQTJCQyxNQUEzQixFQUE4QztBQUFBLFlBQWJVLElBQWEsdUVBQVAsTUFBTzs7QUFDdEQsWUFBSVQsT0FBTyxJQUFYO0FBQ0EsWUFBSVUsUUFBUVQsR0FBR1UsY0FBSCxDQUFrQixPQUFsQixDQUFaLENBRnNELENBRWY7QUFDdkNWLFdBQUdXLE9BQUgsQ0FBVztBQUNQVixpQkFBS0YsS0FBS2pCLEdBQUwsR0FBV2EsTUFBTWlCLE1BRGY7QUFFUEMsb0JBQVE7QUFDSix5QkFBU0o7QUFETCxhQUZEO0FBS1B6QixrQkFBTVcsS0FMQztBQU1QaUIsb0JBQVFKLElBTkQ7QUFPUEgscUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQjtBQUNBLG9CQUFJQSxJQUFJUSxVQUFKLElBQWtCLEdBQWxCLElBQXlCUixJQUFJdEIsSUFBSixDQUFTK0IsSUFBVCxJQUFlLElBQTVDLEVBQWlEO0FBQzdDZix1QkFBR2dCLGdCQUFIO0FBQ0FoQix1QkFBR2lCLFNBQUgsQ0FBYTtBQUNUQywrQkFBTyxFQURFO0FBRVRDLGlDQUFTYixJQUFJdEIsSUFBSixDQUFTb0MsT0FGVDtBQUdUQyxvQ0FBWSxLQUhIO0FBSVRDLHFDQUFhLE1BSko7QUFLVGpCLGlDQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEIsZ0NBQUlBLElBQUlpQixPQUFSLEVBQWlCO0FBQ2J2QixtQ0FBR3dCLFVBQUgsQ0FBYztBQUNWdkIseUNBQUs7QUFESyxpQ0FBZDtBQUdIO0FBQ0o7QUFYUSxxQkFBYjtBQWFBRCx1QkFBR3lCLFVBQUgsQ0FBYyxPQUFkO0FBQ0F6Qix1QkFBRzBCLE9BQUgsQ0FBVyxPQUFYO0FBQ0gsaUJBakJELE1BaUJLO0FBQ0Q3Qiw2QkFBU1MsR0FBVDtBQUNIO0FBQ0osYUE3Qk07QUE4QlBSLGtCQUFNLGdCQUFVO0FBQ1pBO0FBQ0g7QUFoQ00sU0FBWDtBQWtDSCxLQXJDRDtBQXNDQSxTQUFLNkIsT0FBTCxHQUFlLFVBQVVDLEdBQVYsRUFBZTtBQUMxQixZQUFJQyxNQUFNRCxJQUFJRSxLQUFKLENBQVUsRUFBVixDQUFWO0FBQ0EsWUFBSUMsU0FBUyxFQUFiO0FBQ0FGLFlBQUk1QyxHQUFKLENBQVEsVUFBVVEsQ0FBVixFQUFhdUMsQ0FBYixFQUFnQjtBQUNwQixnQkFBSUMsSUFBSXhDLEVBQUV5QyxVQUFGLEVBQVI7QUFDQSxnQkFBSUMsSUFBSSxJQUFJRCxVQUFKLEVBQVI7QUFDQUgsc0JBQVVLLE9BQU9DLFlBQVAsQ0FBb0JKLElBQUlFLENBQXhCLENBQVY7QUFDSCxTQUpEO0FBS0EsZUFBT0osTUFBUDtBQUNILEtBVEQ7QUFVSDs7a0JBRWNsRCxVIiwiZmlsZSI6ImNvbW1vbmh0dHAgLSDlia/mnKwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmZ1bmN0aW9uIGNvbW1vbmh0dHAoKXtcclxuICAgIC8vdGhpcy5hcGkgPSAnaHR0cHM6Ly94aWFvY2hlbmd4dS5xdWFuZGFzaGkuY29tLyc7IC8qIGFwaeWcsOWdgCAqL1xyXG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9wcmUteGN4LnF1YW5kYXNoaS5jb20vJzsgLyogcHJlLWFwaeWcsOWdgCAqL1xyXG4gICAgdGhpcy5maWxlVXJsID0gJ2h0dHA6Ly9maWxlcy5xdWFuZGFzaGkuY29tLyc7IC8qIOaWh+S7tuWcsOWdgCAqL1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgIG1hcDoge30sXHJcbiAgICAgICAgYXBwS2V5OiAncXVhbmRhc2hpMjE1MTI4MzM3MScsXHJcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXHJcbiAgICAgICAgc2lnbk1ldGhvZDogJ21kNScsXHJcbiAgICAgICAgaXA6ICcxMjcuMC4wLjEnLFxyXG4gICAgICAgIC8vc2lnbjogJzQ2QkEwNEU3N0YxRjEyMUE2MTk4RjYwRTg3M0YyNTQnLFxyXG4gICAgICAgIC8vb2xkVmVyc2lvbjogMSxcclxuICAgICAgICBleGVjdXRvcjogJzVhNzIzNDU2NmY2YTc4NTU3MzZkNjk3MzY4NzMzNDQ4NzM2NjY3NzA3OTc3M2QzZCcsXHJcbiAgICAgICAgdjogXCIxLjBcIlxyXG4gICAgfTtcclxuICAgIHRoaXMudXBsb2FkRmlsZSA9IGZ1bmN0aW9uKHBhcmFtLHRlbXBGaWxlUGF0aHMsY2FsbGJhY2ssZmFpbCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3ByZS14Y3gucXVhbmRhc2hpLmNvbS9nbG9iYWwvdXBsb2FkRmlsZXMnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG4gICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgbmFtZTogJ2ZpbGVzJyxcclxuICAgICAgICAgICAgZm9ybURhdGE6IHBhcmFtLCBcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFqYXggPSBmdW5jdGlvbiAocGFyYW0sIGNhbGxiYWNrLCBmYWlsLCB0eXBlID0nUE9TVCcpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTsvL+iOt+WPlnRva2VuXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhhdC5hcGkgKyBwYXJhbS5tZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogcGFyYW0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiByZXMuZGF0YS5jb2RlPT05MDUwKXtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfmiJHnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vLi4vbG9naW4vbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmxvYWRpbmcoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubG9hZGluZygnY2xvc2UnKTsgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGZhaWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMuamlhbWlQVyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICBsZXQgYXJyID0gc3RyLnNwbGl0KCcnKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgYXJyLm1hcChmdW5jdGlvbiAodiwgaSkge1xyXG4gICAgICAgICAgICBsZXQgYSA9IHYuY2hhckNvZGVBdCgpO1xyXG4gICAgICAgICAgICBsZXQgYiA9ICd0Jy5jaGFyQ29kZUF0KCk7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEgXiBiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uaHR0cCJdfQ==