'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _commonhttp = require('./../../js/commonhttp.js');

var _commonhttp2 = _interopRequireDefault(_commonhttp);

var _loading = require('./../../js/loading.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商标搜索'
    }, _this.components = {}, _this.data = {
      keyWord: '',
      page: 0,
      searchList: [],
      tmUrl: '',
      tabs: [{ title: '精确查询', id: 0 }, { title: '近似查询', id: 1 }, { title: '申请人', id: 2 }, { title: '商品/服务', id: 3 }, { title: '注册号', id: 4 }, { title: '代理公司', id: 5 }, { title: '图形搜索', id: 6 }],
      tabActive: 0,
      showTabDropmenu: false,
      showTabDropmenuBodyer: -1,
      showJinsiDropmenu: false,
      tabDropmenu: [{
        title: '申请人',
        id: 10,
        bodyer: [{ title: '深圳腾讯科技有限公司', num: 7 }, { title: '北京梦知网科技有限公司', num: 7 }]
      }, {
        title: '非规范',
        id: 11,
        bodyer: [{ title: '非规范啊', num: 7 }, { title: '非规范啊', num: 7 }, { title: '非规范啊', num: 7 }]
      }, {
        title: '规范',
        id: 12,
        bodyer: [{ title: '规范啊', num: 7 }, { title: '规范啊', num: 7 }, { title: '规范啊', num: 7 }]
      }, {
        title: '申请类别',
        id: 13,
        bodyer: [{ title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }]
      }, {
        title: '法律状态',
        id: 14,
        bodyer: [{ title: '出具注册证明', num: 7 }, { title: '撤销复审中', num: 7 }]
      }, {
        title: '申请年份',
        id: 15,
        bodyer: [{ title: '2018', num: 7 }, { title: '2017', num: 7 }, { title: '2018', num: 7 }, { title: '2017', num: 7 }]
      }],
      jinsiDropmenu: [{ title: '精确结果', id: 10, active: true }, { title: '加字', id: 11, active: true }, { title: '减字', id: 12, active: true }, { title: '变字', id: 13, active: true }, { title: '换序', id: 14, active: true }, { title: '部分相同', id: 15, active: true }, { title: '拼音', id: 16, active: true }, { title: '特殊字符', id: 17, active: true }, { title: '形近字', id: 18, active: true }]
    }, _this.methods = {
      tabSearch: function tabSearch(index, e) {
        console.log(index);
        console.log(e);
        this.tabActive = index;
        if (index === 1) {
          this.showJinsiDropmenu = true;
          this.showTabDropmenu = false;
        } else {
          this.showJinsiDropmenu = false;
          this.showTabDropmenu = true;
        }
      },
      showMenucont: function showMenucont(index, e) {
        console.log(index);
        this.showTabDropmenuBodyer = index;
      },
      hideMenucont: function hideMenucont(e) {
        this.showTabDropmenu = false;
      },
      showJinsiDropmenu: function showJinsiDropmenu(id, e) {
        this.showJinsiDropmenu = !this.showJinsiDropmenu;
      },
      hideJinsiDropmenu: function hideJinsiDropmenu(e) {
        this.showJinsiDropmenu = false;
      },
      jinsiDropmenuHigh: function jinsiDropmenuHigh(index, e) {
        console.log(index);
        console.log(e);
        this.jinsiDropmenu[index].active = !this.jinsiDropmenu[index].active;
      },
      linkBrandDetail: function linkBrandDetail(index, e) {
        _wepy2.default.navigateTo({
          url: 'brandDetail'
        });
      },
      getKeyword: function getKeyword(e) {
        this.keyWord = e.detail.value;
      },
      brandSearch: function brandSearch(e) {
        (0, _loading.loading)();
        var that = this;
        var common = new _commonhttp2.default();
        common.data.map.q = this.keyWord;
        common.data.map.page = this.page;
        common.data.map.field = 'name';
        common.data.map.pageSize = 50;
        common.data.map.typeCode = '';
        common.data.map.style = '';

        var param = common.data;
        param.map = common.data.map;
        param.method = 'brandSearch';
        param.oldVersion = 1;
        common.ajax(param, function (result) {
          console.log(result);
          if (result.statusCode == 200 && result.data.code == 9091) {
            console.log(result.data.data.items);
            that.tmUrl = common.tmUrl + 'jpg/';
            that.searchList = result.data.data.items;
            that.$apply();
          } else {}
        }, function () {}, function () {
          (0, _loading.loading)('close');
        });

        //wx.request('xxxx').then((d) => console.log(d))
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('页面上拉触底事件的处理函数');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/brandSearch/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwia2V5V29yZCIsInBhZ2UiLCJzZWFyY2hMaXN0IiwidG1VcmwiLCJ0YWJzIiwidGl0bGUiLCJpZCIsInRhYkFjdGl2ZSIsInNob3dUYWJEcm9wbWVudSIsInNob3dUYWJEcm9wbWVudUJvZHllciIsInNob3dKaW5zaURyb3BtZW51IiwidGFiRHJvcG1lbnUiLCJib2R5ZXIiLCJudW0iLCJqaW5zaURyb3BtZW51IiwiYWN0aXZlIiwibWV0aG9kcyIsInRhYlNlYXJjaCIsImluZGV4IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93TWVudWNvbnQiLCJoaWRlTWVudWNvbnQiLCJoaWRlSmluc2lEcm9wbWVudSIsImppbnNpRHJvcG1lbnVIaWdoIiwibGlua0JyYW5kRGV0YWlsIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRLZXl3b3JkIiwiZGV0YWlsIiwidmFsdWUiLCJicmFuZFNlYXJjaCIsInRoYXQiLCJjb21tb24iLCJjb21tb25odHRwIiwibWFwIiwicSIsImZpZWxkIiwicGFnZVNpemUiLCJ0eXBlQ29kZSIsInN0eWxlIiwicGFyYW0iLCJtZXRob2QiLCJvbGRWZXJzaW9uIiwiYWpheCIsInJlc3VsdCIsInN0YXR1c0NvZGUiLCJjb2RlIiwiaXRlbXMiLCIkYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxZQUFNLENBRkQ7QUFHTEMsa0JBQVksRUFIUDtBQUlMQyxhQUFPLEVBSkY7QUFLTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU8sTUFBUixFQUFn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TUFBNUI7QUFDQStCLGlCQUFLaEMsVUFBTCxHQUFrQjZDLE9BQU9oRCxJQUFQLENBQVlBLElBQVosQ0FBaUJtRCxLQUFuQztBQUNBaEIsaUJBQUtpQixNQUFMO0FBQ0QsV0FMRCxNQUtPLENBRU47QUFDSixTQVZELEVBVUUsWUFBVSxDQUNYLENBWEQsRUFXRSxZQUFVO0FBQ1YsZ0NBQVEsT0FBUjtBQUNELFNBYkQ7O0FBZUE7QUFDRDtBQXRFTyxLOzs7Ozs2QkEwRUEsQ0FDVDs7O29DQUVnQjtBQUNmL0IsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDRDs7OztFQTNNZ0NNLGVBQUsxQixJOztrQkFBbkJOLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgY29tbW9uaHR0cCBmcm9tICcuLi8uLi9qcy9jb21tb25odHRwJ1xuICBpbXBvcnQge2xvYWRpbmcsIG5hdmxvYWRpbmd9IGZyb20gJy4uLy4uL2pzL2xvYWRpbmcnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYbmoIfmkJzntKInXG4gICAgfTtcblxuICAgIGNvbXBvbmVudHMgPSB7fTtcblxuICAgIGRhdGEgPSB7XG4gICAgICBrZXlXb3JkOiAnJyxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBzZWFyY2hMaXN0OiBbXSxcbiAgICAgIHRtVXJsOiAnJyxcbiAgICAgIHRhYnM6IFtcbiAgICAgICAge3RpdGxlOiAn57K+56Gu5p+l6K+iJywgaWQ6IDB9LFxuICAgICAgICB7dGl0bGU6ICfov5HkvLzmn6Xor6InLCBpZDogMX0sXG4gICAgICAgIHt0aXRsZTogJ+eUs+ivt+S6uicsIGlkOiAyfSxcbiAgICAgICAge3RpdGxlOiAn5ZWG5ZOBL+acjeWKoScsIGlkOiAzfSxcbiAgICAgICAge3RpdGxlOiAn5rOo5YaM5Y+3JywgaWQ6IDR9LFxuICAgICAgICB7dGl0bGU6ICfku6PnkIblhazlj7gnLCBpZDogNX0sXG4gICAgICAgIHt0aXRsZTogJ+WbvuW9ouaQnOe0oicsIGlkOiA2fVxuICAgICAgXSxcbiAgICAgIHRhYkFjdGl2ZTogMCxcbiAgICAgIHNob3dUYWJEcm9wbWVudTogZmFsc2UsXG4gICAgICBzaG93VGFiRHJvcG1lbnVCb2R5ZXI6IC0xLFxuICAgICAgc2hvd0ppbnNpRHJvcG1lbnU6IGZhbHNlLFxuICAgICAgdGFiRHJvcG1lbnU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn55Sz6K+35Lq6JyxcbiAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfmt7HlnLPohb7orq/np5HmioDmnInpmZDlhazlj7gnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5YyX5Lqs5qKm55+l572R56eR5oqA5pyJ6ZmQ5YWs5Y+4JywgbnVtOiA3fVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6Z2e6KeE6IyDJyxcbiAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfpnZ7op4TojIPllYonLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn6Z2e6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+mdnuinhOiMg+WViicsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+inhOiMgycsXG4gICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+inhOiMg+WViicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICfop4TojIPllYonLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfnlLPor7fnsbvliKsnLFxuICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICBib2R5ZXI6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+azleW+i+eKtuaAgScsXG4gICAgICAgICAgaWQ6IDE0LFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn5Ye65YW35rOo5YaM6K+B5piOJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+aSpOmUgOWkjeWuoeS4rScsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+eUs+ivt+W5tOS7vScsXG4gICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAnMjAxOCcsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcyMDE3JywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzIwMTgnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMjAxNycsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBqaW5zaURyb3BtZW51OiBbXG4gICAgICAgIHt0aXRsZTogJ+eyvuehrue7k+aenCcsIGlkOiAxMCwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5Yqg5a2XJywgaWQ6IDExLCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflh4/lrZcnLCBpZDogMTIsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+WPmOWtlycsIGlkOiAxMywgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5o2i5bqPJywgaWQ6IDE0LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICfpg6jliIbnm7jlkIwnLCBpZDogMTUsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+aLvOmfsycsIGlkOiAxNiwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn54m55q6K5a2X56ymJywgaWQ6IDE3LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflvaLov5HlrZcnLCBpZDogMTgsIGFjdGl2ZTogdHJ1ZX1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFiU2VhcmNoIChpbmRleCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgdGhpcy50YWJBY3RpdmUgPSBpbmRleFxuICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51ID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNob3dUYWJEcm9wbWVudSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNob3dNZW51Y29udCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51Qm9keWVyID0gaW5kZXhcbiAgICAgIH0sXG4gICAgICBoaWRlTWVudWNvbnQgKGUpIHtcbiAgICAgICAgdGhpcy5zaG93VGFiRHJvcG1lbnUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNob3dKaW5zaURyb3BtZW51IChpZCwgZSkge1xuICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gIXRoaXMuc2hvd0ppbnNpRHJvcG1lbnVcbiAgICAgIH0sXG4gICAgICBoaWRlSmluc2lEcm9wbWVudSAoZSkge1xuICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBqaW5zaURyb3BtZW51SGlnaCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHRoaXMuamluc2lEcm9wbWVudVtpbmRleF0uYWN0aXZlID0gIXRoaXMuamluc2lEcm9wbWVudVtpbmRleF0uYWN0aXZlXG4gICAgICB9LFxuICAgICAgbGlua0JyYW5kRGV0YWlsIChpbmRleCwgZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2JyYW5kRGV0YWlsJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdldEtleXdvcmQgKGUpIHtcbiAgICAgICAgdGhpcy5rZXlXb3JkID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBicmFuZFNlYXJjaCAoZSkge1xuICAgICAgICBsb2FkaW5nKCk7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IGNvbW1vbiA9IG5ldyBjb21tb25odHRwKCk7XG4gICAgICAgIGNvbW1vbi5kYXRhLm1hcC5xID0gdGhpcy5rZXlXb3JkO1xuICAgICAgICBjb21tb24uZGF0YS5tYXAucGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgY29tbW9uLmRhdGEubWFwLmZpZWxkID0gJ25hbWUnO1xuICAgICAgICBjb21tb24uZGF0YS5tYXAucGFnZVNpemUgPSA1MDtcbiAgICAgICAgY29tbW9uLmRhdGEubWFwLnR5cGVDb2RlID0gJyc7XG4gICAgICAgIGNvbW1vbi5kYXRhLm1hcC5zdHlsZSA9ICcnO1xuXG4gICAgICAgIGxldCBwYXJhbSA9IGNvbW1vbi5kYXRhO1xuICAgICAgICBwYXJhbS5tYXAgPSBjb21tb24uZGF0YS5tYXA7XG4gICAgICAgIHBhcmFtLm1ldGhvZCA9ICdicmFuZFNlYXJjaCc7XG4gICAgICAgIHBhcmFtLm9sZFZlcnNpb24gPSAxO1xuICAgICAgICBjb21tb24uYWpheChwYXJhbSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzdWx0LmRhdGEuY29kZSA9PSA5MDkxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgdGhhdC50bVVybCA9IGNvbW1vbi50bVVybCArICdqcGcvJztcbiAgICAgICAgICAgICAgdGhhdC5zZWFyY2hMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LGZ1bmN0aW9uKCl7XG4gICAgICAgIH0sZnVuY3Rpb24oKXtcbiAgICAgICAgICBsb2FkaW5nKCdjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3d4LnJlcXVlc3QoJ3h4eHgnKS50aGVuKChkKSA9PiBjb25zb2xlLmxvZyhkKSlcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSAoKSB7XG4gICAgICBjb25zb2xlLmxvZygn6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwJylcbiAgICB9XG4gfVxuXG4iXX0=