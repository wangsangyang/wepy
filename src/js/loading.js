import wepy from 'wepy';

let navloading = function (type) {
    if (type == 'close') {
        wx.hideNavigationBarLoading();
    } else {
        wx.showNavigationBarLoading();
    }
};

let loading = function (param) {
    if (param == 'close') {
        wx.hideLoading();
    } else {
        wx.showLoading({
            mask: true,
            title: param ? param.title : ''
        });
    }

};

export {loading, navloading}