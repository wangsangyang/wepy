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
    this.ajax = function (param, _success, _fail2, _complete) {
        var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'POST';

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
                } else {
                    _success(res);
                }
            },
            fail: function fail() {
                _fail2();
            },
            complete: function complete() {
                _complete();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbmh0dHAuanMiXSwibmFtZXMiOlsiY29tbW9uaHR0cCIsImFwaSIsInRtVXJsIiwiZmlsZVVybCIsImRhdGEiLCJtYXAiLCJhcHBLZXkiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0VGltZSIsInNpZ25NZXRob2QiLCJpcCIsImV4ZWN1dG9yIiwidiIsInVwbG9hZEZpbGUiLCJwYXJhbSIsInRlbXBGaWxlUGF0aHMiLCJjYWxsYmFjayIsImZhaWwiLCJ0aGF0Iiwid3giLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJmb3JtRGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJhamF4IiwiY29tcGxldGUiLCJ0eXBlIiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJzdGF0dXNDb2RlIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY29uZmlybSIsIm5hdmlnYXRlVG8iLCJqaWFtaVBXIiwic3RyIiwiYXJyIiwic3BsaXQiLCJyZXN1bHQiLCJpIiwiYSIsImNoYXJDb2RlQXQiLCJiIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsVUFBVCxHQUFxQjtBQUNqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxnQ0FBWCxDQUZpQixDQUU0QjtBQUM3QyxTQUFLQyxLQUFMLEdBQWEsZ0RBQWIsQ0FIaUIsQ0FHOEM7QUFDL0QsU0FBS0MsT0FBTCxHQUFlLDZCQUFmLENBSmlCLENBSTZCO0FBQzlDLFNBQUtDLElBQUwsR0FBWTtBQUNSQyxhQUFLLEVBREc7QUFFUkMsZ0JBQVEscUJBRkE7QUFHUkMsbUJBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBSEg7QUFJUkMsb0JBQVksS0FKSjtBQUtSQyxZQUFJLFdBTEk7QUFNUjtBQUNBO0FBQ0FDLGtCQUFVLGtEQVJGO0FBU1JDLFdBQUc7QUFUSyxLQUFaO0FBV0EsU0FBS0MsVUFBTCxHQUFrQixVQUFTQyxLQUFULEVBQWVDLGFBQWYsRUFBNkJDLFFBQTdCLEVBQXNDQyxLQUF0QyxFQUEyQztBQUN6RCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR04sVUFBSCxDQUFjO0FBQ1ZPLGlCQUFLLGtEQURLLEVBQytDO0FBQ3pEQyxzQkFBVU4sY0FBYyxDQUFkLENBRkE7QUFHVk8sa0JBQU0sT0FISTtBQUlWQyxzQkFBVVQsS0FKQTtBQUtWVSxxQkFBUyxpQkFBU0MsR0FBVCxFQUFhO0FBQ2xCVCx5QkFBU1MsR0FBVDtBQUNILGFBUFM7QUFRVlIsa0JBQU0sZ0JBQVU7QUFDWkE7QUFDSDtBQVZTLFNBQWQ7QUFZSCxLQWREO0FBZUEsU0FBS1MsSUFBTCxHQUFZLFVBQVVaLEtBQVYsRUFBaUJVLFFBQWpCLEVBQTBCUCxNQUExQixFQUFnQ1UsU0FBaEMsRUFBc0Q7QUFBQSxZQUFiQyxJQUFhLHVFQUFQLE1BQU87O0FBQzlELFlBQUlWLE9BQU8sSUFBWDtBQUNBLFlBQUlXLFFBQVFWLEdBQUdXLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWixDQUY4RCxDQUV2QjtBQUN2Q1gsV0FBR1ksT0FBSCxDQUFXO0FBQ1BYLGlCQUFLRixLQUFLbEIsR0FBTCxHQUFXYyxNQUFNa0IsTUFEZjtBQUVQQyxvQkFBUTtBQUNKLHlCQUFTSjtBQURMLGFBRkQ7QUFLUDFCLGtCQUFNVyxLQUxDO0FBTVBrQixvQkFBUUosSUFORDtBQU9QSixxQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCO0FBQ0Esb0JBQUlBLElBQUlTLFVBQUosSUFBa0IsR0FBbEIsSUFBeUJULElBQUl0QixJQUFKLENBQVNnQyxJQUFULElBQWUsSUFBNUMsRUFBaUQ7QUFDN0NoQix1QkFBR2lCLGdCQUFIO0FBQ0FqQix1QkFBR2tCLFNBQUgsQ0FBYTtBQUNUQywrQkFBTyxFQURFO0FBRVRDLGlDQUFTZCxJQUFJdEIsSUFBSixDQUFTcUMsT0FGVDtBQUdUQyxvQ0FBWSxLQUhIO0FBSVRDLHFDQUFhLE1BSko7QUFLVGxCLGlDQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEIsZ0NBQUlBLElBQUlrQixPQUFSLEVBQWlCO0FBQ2J4QixtQ0FBR3lCLFVBQUgsQ0FBYztBQUNWeEIseUNBQUs7QUFESyxpQ0FBZDtBQUdIO0FBQ0o7QUFYUSxxQkFBYjtBQWFILGlCQWZELE1BZUs7QUFDREksNkJBQVFDLEdBQVI7QUFDSDtBQUNKLGFBM0JNO0FBNEJQUixrQkFBTSxnQkFBVTtBQUNaQTtBQUNILGFBOUJNO0FBK0JQVSxzQkFBVSxvQkFBVTtBQUNoQkE7QUFDSDtBQWpDTSxTQUFYO0FBbUNILEtBdENEO0FBdUNBLFNBQUtrQixPQUFMLEdBQWUsVUFBVUMsR0FBVixFQUFlO0FBQzFCLFlBQUlDLE1BQU1ELElBQUlFLEtBQUosQ0FBVSxFQUFWLENBQVY7QUFDQSxZQUFJQyxTQUFTLEVBQWI7QUFDQUYsWUFBSTNDLEdBQUosQ0FBUSxVQUFVUSxDQUFWLEVBQWFzQyxDQUFiLEVBQWdCO0FBQ3BCLGdCQUFJQyxJQUFJdkMsRUFBRXdDLFVBQUYsRUFBUjtBQUNBLGdCQUFJQyxJQUFJLElBQUlELFVBQUosRUFBUjtBQUNBSCxzQkFBVUssT0FBT0MsWUFBUCxDQUFvQkosSUFBSUUsQ0FBeEIsQ0FBVjtBQUNILFNBSkQ7QUFLQSxlQUFPSixNQUFQO0FBQ0gsS0FURDtBQVVIOztrQkFFY2xELFUiLCJmaWxlIjoiY29tbW9uaHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZnVuY3Rpb24gY29tbW9uaHR0cCgpe1xyXG4gICAgLy90aGlzLmFwaSA9ICdodHRwczovL3hpYW9jaGVuZ3h1LnF1YW5kYXNoaS5jb20vJzsgLyogYXBp5Zyw5Z2AICovXHJcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL3ByZS14Y3gucXVhbmRhc2hpLmNvbS8nOyAvKiBwcmUtYXBp5Zyw5Z2AICovXHJcbiAgICB0aGlzLnRtVXJsID0gJ2h0dHBzOi8vdG0taW1hZ2VzLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS8nOyAvKiDmlofku7blnLDlnYAgKi9cclxuICAgIHRoaXMuZmlsZVVybCA9ICdodHRwOi8vZmlsZXMucXVhbmRhc2hpLmNvbS8nOyAvKiDmlofku7blnLDlnYAgKi9cclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICBtYXA6IHt9LFxyXG4gICAgICAgIGFwcEtleTogJ3F1YW5kYXNoaTIxNTEyODMzNzEnLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksIFxyXG4gICAgICAgIHNpZ25NZXRob2Q6ICdtZDUnLFxyXG4gICAgICAgIGlwOiAnMTI3LjAuMC4xJyxcclxuICAgICAgICAvL3NpZ246ICc0NkJBMDRFNzdGMUYxMjFBNjE5OEY2MEU4NzNGMjU0JyxcclxuICAgICAgICAvL29sZFZlcnNpb246IDEsXHJcbiAgICAgICAgZXhlY3V0b3I6ICc1YTcyMzQ1NjZmNmE3ODU1NzM2ZDY5NzM2ODczMzQ0ODczNjY2NzcwNzk3NzNkM2QnLFxyXG4gICAgICAgIHY6IFwiMS4wXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnVwbG9hZEZpbGUgPSBmdW5jdGlvbihwYXJhbSx0ZW1wRmlsZVBhdGhzLGNhbGxiYWNrLGZhaWwpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmUteGN4LnF1YW5kYXNoaS5jb20vZ2xvYmFsL3VwbG9hZEZpbGVzJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlcycsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiBwYXJhbSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hamF4ID0gZnVuY3Rpb24gKHBhcmFtLCBzdWNjZXNzLCBmYWlsLCBjb21wbGV0ZSx0eXBlID0nUE9TVCcpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTsvL+iOt+WPlnRva2VuXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhhdC5hcGkgKyBwYXJhbS5tZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzogdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogcGFyYW0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDIwMCAmJiByZXMuZGF0YS5jb2RlPT05MDUwKXtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6ICfmiJHnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vLi4vbG9naW4vbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmppYW1pUFcgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnJyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGFyci5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSB2LmNoYXJDb2RlQXQoKTtcclxuICAgICAgICAgICAgbGV0IGIgPSAndCcuY2hhckNvZGVBdCgpO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhIF4gYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbmh0dHAiXX0=