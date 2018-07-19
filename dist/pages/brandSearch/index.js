'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      tabs: [{ title: '精确查询', id: 0 }, { title: '近似查询', id: 1 }, { title: '申请人', id: 2 }, { title: '商品/服务', id: 3 }, { title: '注册号', id: 4 }, { title: '代理公司', id: 5 }, { title: '图形搜索', id: 6 }],
      tabActive: -1,
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
        bodyer: [{ title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }, { title: '02 颜料油漆', num: 7 }, { title: '01 化学原料', num: 7 }]
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log('页面上拉触底事件的处理函数');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/brandSearch/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGFicyIsInRpdGxlIiwiaWQiLCJ0YWJBY3RpdmUiLCJzaG93VGFiRHJvcG1lbnUiLCJzaG93VGFiRHJvcG1lbnVCb2R5ZXIiLCJzaG93Smluc2lEcm9wbWVudSIsInRhYkRyb3BtZW51IiwiYm9keWVyIiwibnVtIiwiamluc2lEcm9wbWVudSIsImFjdGl2ZSIsIm1ldGhvZHMiLCJ0YWJTZWFyY2giLCJpbmRleCIsImUiLCJjb25zb2xlIiwibG9nIiwic2hvd01lbnVjb250IiwiaGlkZU1lbnVjb250IiwiaGlkZUppbnNpRHJvcG1lbnUiLCJqaW5zaURyb3BtZW51SGlnaCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU8sTUFBUixFQUFnQkMsSUFBSSxDQUFwQixFQURJLEVBRUosRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLENBQXBCLEVBRkksRUFHSixFQUFDRCxPQUFPLEtBQVIsRUFBZUMsSUFBSSxDQUFuQixFQUhJLEVBSUosRUFBQ0QsT0FBTyxPQUFSLEVBQWlCQyxJQUFJLENBQXJCLEVBSkksRUFLSixFQUFDRCxPQUFPLEtBQVIsRUFBZUMsSUFBSSxDQUFuQixFQUxJLEVBTUosRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLENBQXBCLEVBTkksRUFPSixFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLElBQUksQ0FBcEIsRUFQSSxDQUREO0FBVUxDLGlCQUFXLENBQUMsQ0FWUDtBQVdMQyx1QkFBaUIsS0FYWjtBQVlMQyw2QkFBdUIsQ0FBQyxDQVpuQjtB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d0JBaUJNSixDQWpCTixFQWlCUztBQUNmLGFBQUtYLGVBQUwsR0FBdUIsS0FBdkI7QUFDRCxPQW5CTztBQW9CUkUsdUJBcEJRLDZCQW9CV0osRUFwQlgsRUFvQmVhLENBcEJmLEVBb0JrQjtBQUN4QixhQUFLVCxpQkFBTCxHQUF5QixDQUFDLEtBQUtBLGlCQUEvQjtBQUNELE9BdEJPO0FBdUJSYyx1QkF2QlEsNkJBdUJXTCxDQXZCWCxFQXVCYztBQUNwQixhQUFLVCxpQkFBTCxHQUF5QixLQUF6QjtBQUNELE9BekJPO0FBMEJSZSx1QkExQlEsNkJBMEJXUCxLQTFCWCxFQTBCa0JDLENBMUJsQixFQTBCcUI7QUFDM0JDLGdCQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLGFBQUtMLGFBQUwsQ0FBbUJJLEtBQW5CLEVBQTBCSCxNQUExQixHQUFtQyxDQUFDLEtBQUtELGFBQUwsQ0FBbUJJLEtBQW5CLEVBQTBCSCxNQUE5RDtBQUNEO0FBOUJPLEs7Ozs7O29DQWlDTztBQUNmSyxjQUFRQyxHQUFSLENBQVksZUFBWjtBQUNEOzs7O0VBNUpnQ0ssZUFBS0MsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5qCH5pCc57SiJ1xuICAgIH07XG5cbiAgICBjb21wb25lbnRzID0ge307XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGFiczogW1xuICAgICAgICB7dGl0bGU6ICfnsr7noa7mn6Xor6InLCBpZDogMH0sXG4gICAgICAgIHt0aXRsZTogJ+i/keS8vOafpeivoicsIGlkOiAxfSxcbiAgICAgICAge3RpdGxlOiAn55Sz6K+35Lq6JywgaWQ6IDJ9LFxuICAgICAgICB7dGl0bGU6ICfllYblk4Ev5pyN5YqhJywgaWQ6IDN9LFxuICAgICAgICB7dGl0bGU6ICfms6jlhozlj7cnLCBpZDogNH0sXG4gICAgICAgIHt0aXRsZTogJ+S7o+eQhuWFrOWPuCcsIGlkOiA1fSxcbiAgICAgICAge3RpdGxlOiAn5Zu+5b2i5pCc57SiJywgaWQ6IDZ9XG4gICAgICBdLFxuICAgICAgdGFiQWN0aXZlOiAtMSxcbiAgICAgIHNob3dUYWJEcm9wbWVudTogZmFsc2UsXG4gICAgICBzaG93VGFiRHJvcG1lbnVCb2R5ZXI6IC0xLFxuICAgICAgc2hvd0ppbnNpRHJvcG1lbnU6IGZhbHNlLFxuICAgICAgdGFiRHJvcG1lbnU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn55Sz6K+35Lq6JyxcbiAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfmt7HlnLPohb7orq/np5HmioDmnInpmZDlhazlj7gnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5YyX5Lqs5qKm55+l572R56eR5oqA5pyJ6ZmQ5YWs5Y+4JywgbnVtOiA3fVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6Z2e6KeE6IyDJyxcbiAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfpnZ7op4TojIPllYonLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn6Z2e6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+mdnuinhOiMg+WViicsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+inhOiMgycsXG4gICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+inhOiMg+WViicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICfop4TojIPllYonLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfnlLPor7fnsbvliKsnLFxuICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICBib2R5ZXI6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfms5XlvovnirbmgIEnLFxuICAgICAgICAgIGlkOiAxNCxcbiAgICAgICAgICBib2R5ZXI6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJ+WHuuWFt+azqOWGjOivgeaYjicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICfmkqTplIDlpI3lrqHkuK0nLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfnlLPor7flubTku70nLFxuICAgICAgICAgIGlkOiAxNSxcbiAgICAgICAgICBib2R5ZXI6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJzIwMTgnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMjAxNycsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcyMDE4JywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzIwMTcnLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgamluc2lEcm9wbWVudTogW1xuICAgICAgICB7dGl0bGU6ICfnsr7noa7nu5PmnpwnLCBpZDogMTAsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+WKoOWtlycsIGlkOiAxMSwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5YeP5a2XJywgaWQ6IDEyLCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflj5jlrZcnLCBpZDogMTMsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+aNouW6jycsIGlkOiAxNCwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn6YOo5YiG55u45ZCMJywgaWQ6IDE1LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICfmi7zpn7MnLCBpZDogMTYsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+eJueauiuWtl+espicsIGlkOiAxNywgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5b2i6L+R5a2XJywgaWQ6IDE4LCBhY3RpdmU6IHRydWV9XG4gICAgICBdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhYlNlYXJjaCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHRoaXMudGFiQWN0aXZlID0gaW5kZXhcbiAgICAgICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5zaG93Smluc2lEcm9wbWVudSA9IHRydWVcbiAgICAgICAgICB0aGlzLnNob3dUYWJEcm9wbWVudSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93Smluc2lEcm9wbWVudSA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5zaG93VGFiRHJvcG1lbnUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaG93TWVudWNvbnQgKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICB0aGlzLnNob3dUYWJEcm9wbWVudUJvZHllciA9IGluZGV4XG4gICAgICB9LFxuICAgICAgaGlkZU1lbnVjb250IChlKSB7XG4gICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBzaG93Smluc2lEcm9wbWVudSAoaWQsIGUpIHtcbiAgICAgICAgdGhpcy5zaG93Smluc2lEcm9wbWVudSA9ICF0aGlzLnNob3dKaW5zaURyb3BtZW51XG4gICAgICB9LFxuICAgICAgaGlkZUppbnNpRHJvcG1lbnUgKGUpIHtcbiAgICAgICAgdGhpcy5zaG93Smluc2lEcm9wbWVudSA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgamluc2lEcm9wbWVudUhpZ2ggKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB0aGlzLmppbnNpRHJvcG1lbnVbaW5kZXhdLmFjdGl2ZSA9ICF0aGlzLmppbnNpRHJvcG1lbnVbaW5kZXhdLmFjdGl2ZVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20gKCkge1xuICAgICAgY29uc29sZS5sb2coJ+mhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsCcpXG4gICAgfVxuIH1cblxuIl19