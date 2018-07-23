'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navloading = exports.loading = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navloading = function navloading(type) {
    if (type == 'close') {
        wx.hideNavigationBarLoading();
    } else {
        wx.showNavigationBarLoading();
    }
};

var loading = function loading(param) {
    if (param == 'close') {
        wx.hideLoading();
    } else {
        wx.showLoading({
            mask: true,
            title: param ? param.title : ''
        });
    }
};

exports.loading = loading;
exports.navloading = navloading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsibmF2bG9hZGluZyIsInR5cGUiLCJ3eCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZyIsImxvYWRpbmciLCJwYXJhbSIsImhpZGVMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJtYXNrIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYSxTQUFiQSxVQUFhLENBQVVDLElBQVYsRUFBZ0I7QUFDN0IsUUFBSUEsUUFBUSxPQUFaLEVBQXFCO0FBQ2pCQyxXQUFHQyx3QkFBSDtBQUNILEtBRkQsTUFFTztBQUNIRCxXQUFHRSx3QkFBSDtBQUNIO0FBQ0osQ0FORDs7QUFRQSxJQUFJQyxVQUFVLFNBQVZBLE9BQVUsQ0FBVUMsS0FBVixFQUFpQjtBQUMzQixRQUFJQSxTQUFTLE9BQWIsRUFBc0I7QUFDbEJKLFdBQUdLLFdBQUg7QUFDSCxLQUZELE1BRU87QUFDSEwsV0FBR00sV0FBSCxDQUFlO0FBQ1hDLGtCQUFNLElBREs7QUFFWEMsbUJBQU9KLFFBQVFBLE1BQU1JLEtBQWQsR0FBc0I7QUFGbEIsU0FBZjtBQUlIO0FBRUosQ0FWRDs7UUFZUUwsTyxHQUFBQSxPO1FBQVNMLFUsR0FBQUEsVSIsImZpbGUiOiJsb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5sZXQgbmF2bG9hZGluZyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICBpZiAodHlwZSA9PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubGV0IGxvYWRpbmcgPSBmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgIGlmIChwYXJhbSA9PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogcGFyYW0gPyBwYXJhbS50aXRsZSA6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkaW5nLCBuYXZsb2FkaW5nfSJdfQ==