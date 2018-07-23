'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function common() {
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

exports.default = common;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJjb21tb24iLCJhcGkiLCJmaWxlVXJsIiwiZGF0YSIsIm1hcCIsImFwcEtleSIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwic2lnbk1ldGhvZCIsImlwIiwiZXhlY3V0b3IiLCJ2IiwidXBsb2FkRmlsZSIsInBhcmFtIiwidGVtcEZpbGVQYXRocyIsImNhbGxiYWNrIiwiZmFpbCIsInRoYXQiLCJ3eCIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwic3VjY2VzcyIsInJlcyIsImFqYXgiLCJ0eXBlIiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJzdGF0dXNDb2RlIiwiY29kZSIsImNsZWFyU3RvcmFnZVN5bmMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY29uZmlybSIsIm5hdmlnYXRlVG8iLCJuYXZsb2FkaW5nIiwibG9hZGluZyIsImppYW1pUFciLCJzdHIiLCJhcnIiLCJzcGxpdCIsInJlc3VsdCIsImkiLCJhIiwiY2hhckNvZGVBdCIsImIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsTUFBVCxHQUFpQjtBQUNiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLGdDQUFYLENBRmEsQ0FFZ0M7QUFDN0MsU0FBS0MsT0FBTCxHQUFlLDZCQUFmLENBSGEsQ0FHaUM7QUFDOUMsU0FBS0MsSUFBTCxHQUFZO0FBQ1JDLGFBQUssRUFERztBQUVSQyxnQkFBUSxxQkFGQTtBQUdSQyxtQkFBVyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFISDtBQUlSQyxvQkFBWSxLQUpKO0FBS1JDLFlBQUksV0FMSTtBQU1SO0FBQ0E7QUFDQUMsa0JBQVUsa0RBUkY7QUFTUkMsV0FBRztBQVRLLEtBQVo7QUFXQSxTQUFLQyxVQUFMLEdBQWtCLFVBQVNDLEtBQVQsRUFBZUMsYUFBZixFQUE2QkMsUUFBN0IsRUFBc0NDLEtBQXRDLEVBQTJDO0FBQ3pELFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHTixVQUFILENBQWM7QUFDVk8saUJBQUssa0RBREssRUFDK0M7QUFDekRDLHNCQUFVTixjQUFjLENBQWQsQ0FGQTtBQUdWTyxrQkFBTSxPQUhJO0FBSVZDLHNCQUFVVCxLQUpBO0FBS1ZVLHFCQUFTLGlCQUFTQyxHQUFULEVBQWE7QUFDbEJULHlCQUFTUyxHQUFUO0FBQ0gsYUFQUztBQVFWUixrQkFBTSxnQkFBVTtBQUNaQTtBQUNIO0FBVlMsU0FBZDtBQVlILEtBZEQ7QUFlQSxTQUFLUyxJQUFMLEdBQVksVUFBVVosS0FBVixFQUFpQkUsUUFBakIsRUFBMkJDLE1BQTNCLEVBQThDO0FBQUEsWUFBYlUsSUFBYSx1RUFBUCxNQUFPOztBQUN0RCxZQUFJVCxPQUFPLElBQVg7QUFDQSxZQUFJVSxRQUFRVCxHQUFHVSxjQUFILENBQWtCLE9BQWxCLENBQVosQ0FGc0QsQ0FFZjtBQUN2Q1YsV0FBR1csT0FBSCxDQUFXO0FBQ1BWLGlCQUFLRixLQUFLakIsR0FBTCxHQUFXYSxNQUFNaUIsTUFEZjtBQUVQQyxvQkFBUTtBQUNKLHlCQUFTSjtBQURMLGFBRkQ7QUFLUHpCLGtCQUFNVyxLQUxDO0FBTVBpQixvQkFBUUosSUFORDtBQU9QSCxxQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCO0FBQ0Esb0JBQUlBLElBQUlRLFVBQUosSUFBa0IsR0FBbEIsSUFBeUJSLElBQUl0QixJQUFKLENBQVMrQixJQUFULElBQWUsSUFBNUMsRUFBaUQ7QUFDN0NmLHVCQUFHZ0IsZ0JBQUg7QUFDQWhCLHVCQUFHaUIsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPLEVBREU7QUFFVEMsaUNBQVNiLElBQUl0QixJQUFKLENBQVNvQyxPQUZUO0FBR1RDLG9DQUFZLEtBSEg7QUFJVEMscUNBQWEsTUFKSjtBQUtUakIsaUNBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQixnQ0FBSUEsSUFBSWlCLE9BQVIsRUFBaUI7QUFDYnZCLG1DQUFHd0IsVUFBSCxDQUFjO0FBQ1Z2Qix5Q0FBSztBQURLLGlDQUFkO0FBR0g7QUFDSjtBQVhRLHFCQUFiO0FBYUFELHVCQUFHeUIsVUFBSCxDQUFjLE9BQWQ7QUFDQXpCLHVCQUFHMEIsT0FBSCxDQUFXLE9BQVg7QUFDSCxpQkFqQkQsTUFpQks7QUFDRDdCLDZCQUFTUyxHQUFUO0FBQ0g7QUFDSixhQTdCTTtBQThCUFIsa0JBQU0sZ0JBQVU7QUFDWkE7QUFDSDtBQWhDTSxTQUFYO0FBa0NILEtBckNEO0FBc0NBLFNBQUs2QixPQUFMLEdBQWUsVUFBVUMsR0FBVixFQUFlO0FBQzFCLFlBQUlDLE1BQU1ELElBQUlFLEtBQUosQ0FBVSxFQUFWLENBQVY7QUFDQSxZQUFJQyxTQUFTLEVBQWI7QUFDQUYsWUFBSTVDLEdBQUosQ0FBUSxVQUFVUSxDQUFWLEVBQWF1QyxDQUFiLEVBQWdCO0FBQ3BCLGdCQUFJQyxJQUFJeEMsRUFBRXlDLFVBQUYsRUFBUjtBQUNBLGdCQUFJQyxJQUFJLElBQUlELFVBQUosRUFBUjtBQUNBSCxzQkFBVUssT0FBT0MsWUFBUCxDQUFvQkosSUFBSUUsQ0FBeEIsQ0FBVjtBQUNILFNBSkQ7QUFLQSxlQUFPSixNQUFQO0FBQ0gsS0FURDtBQVVIOztrQkFFY2xELE0iLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29tbW9uKCl7XHJcbiAgICAvL3RoaXMuYXBpID0gJ2h0dHBzOi8veGlhb2NoZW5neHUucXVhbmRhc2hpLmNvbS8nOyAvKiBhcGnlnLDlnYAgKi9cclxuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vcHJlLXhjeC5xdWFuZGFzaGkuY29tLyc7IC8qIHByZS1hcGnlnLDlnYAgKi9cclxuICAgIHRoaXMuZmlsZVVybCA9ICdodHRwOi8vZmlsZXMucXVhbmRhc2hpLmNvbS8nOyAvKiDmlofku7blnLDlnYAgKi9cclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICBtYXA6IHt9LFxyXG4gICAgICAgIGFwcEtleTogJ3F1YW5kYXNoaTIxNTEyODMzNzEnLFxyXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksIFxyXG4gICAgICAgIHNpZ25NZXRob2Q6ICdtZDUnLFxyXG4gICAgICAgIGlwOiAnMTI3LjAuMC4xJyxcclxuICAgICAgICAvL3NpZ246ICc0NkJBMDRFNzdGMUYxMjFBNjE5OEY2MEU4NzNGMjU0JyxcclxuICAgICAgICAvL29sZFZlcnNpb246IDEsXHJcbiAgICAgICAgZXhlY3V0b3I6ICc1YTcyMzQ1NjZmNmE3ODU1NzM2ZDY5NzM2ODczMzQ0ODczNjY2NzcwNzk3NzNkM2QnLFxyXG4gICAgICAgIHY6IFwiMS4wXCJcclxuICAgIH07XHJcbiAgICB0aGlzLnVwbG9hZEZpbGUgPSBmdW5jdGlvbihwYXJhbSx0ZW1wRmlsZVBhdGhzLGNhbGxiYWNrLGZhaWwpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmUteGN4LnF1YW5kYXNoaS5jb20vZ2xvYmFsL3VwbG9hZEZpbGVzJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlcycsXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiBwYXJhbSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hamF4ID0gZnVuY3Rpb24gKHBhcmFtLCBjYWxsYmFjaywgZmFpbCwgdHlwZSA9J1BPU1QnKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7Ly/ojrflj5Z0b2tlblxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoYXQuYXBpICsgcGFyYW0ubWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtLFxyXG4gICAgICAgICAgICBtZXRob2Q6IHR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzLmRhdGEuY29kZT09OTA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn5oiR55+l6YGT5LqGJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uLy4uL2xvZ2luL2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZsb2FkaW5nKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmxvYWRpbmcoJ2Nsb3NlJyk7ICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmppYW1pUFcgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnJyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGFyci5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSB2LmNoYXJDb2RlQXQoKTtcclxuICAgICAgICAgICAgbGV0IGIgPSAndCcuY2hhckNvZGVBdCgpO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhIF4gYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbiJdfQ==