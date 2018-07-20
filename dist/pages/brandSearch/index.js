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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGFicyIsInRpdGxlIiwiaWQiLCJ0YWJBY3RpdmUiLCJzaG93VGFiRHJvcG1lbnUiLCJzaG93VGFiRHJvcG1lbnVCb2R5ZXIiLCJzaG93Smluc2lEcm9wbWVudSIsInRhYkRyb3BtZW51IiwiYm9keWVyIiwibnVtIiwiamluc2lEcm9wbWVudSIsImFjdGl2ZSIsIm1ldGhvZHMiLCJ0YWJTZWFyY2giLCJpbmRleCIsImUiLCJjb25zb2xlIiwibG9nIiwic2hvd01lbnVjb250IiwiaGlkZU1lbnVjb250IiwiaGlkZUppbnNpRHJvcG1lbnUiLCJqaW5zaURyb3BtZW51SGlnaCIsImxpbmtCcmFuZERldGFpbCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSixFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLElBQUksQ0FBcEIsRUFESSxFQUVKLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsSUFBSSxDQUFwQixFQUZJLEVBR0osRUFBQ0QsT0FBTyxLQUFSLEVBQWVDLElBQUksQ0FBbkIsRUFISSxFQUlKLEVBQUNELE9BQU8sT0FBUixFQUFpQkMsSUFBSSxDQUFyQixFQUpJLEVBS0osRUFBQ0QsT0FBTyxLQUFSLEVBQWVDLElBQUksQ0FBbkIsRUFMSSxFQU1KLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsSUFBSSxDQUFwQixFQU5JLEVBT0osRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLENBQXBCLEVBUEksQ0FERDtBQVVMQyxpQkFBVyxDQUFDLENBVlA7QUFXTEMs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QWpCTixFQWlCUztBQUNmLGFBQUtYLGVBQUwsR0FBdUIsS0FBdkI7QUFDRCxPQW5CTztBQW9CUkUsdUJBcEJRLDZCQW9CV0osRUFwQlgsRUFvQmVhLENBcEJmLEVBb0JrQjtBQUN4QixhQUFLVCxpQkFBTCxHQUF5QixDQUFDLEtBQUtBLGlCQUEvQjtBQUNELE9BdEJPO0FBdUJSYyx1QkF2QlEsNkJBdUJXTCxDQXZCWCxFQXVCYztBQUNwQixhQUFLVCxpQkFBTCxHQUF5QixLQUF6QjtBQUNELE9BekJPO0FBMEJSZSx1QkExQlEsNkJBMEJXUCxLQTFCWCxFQTBCa0JDLENBMUJsQixFQTBCcUI7QUFDM0JDLGdCQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLGFBQUtMLGFBQUwsQ0FBbUJJLEtBQW5CLEVBQTBCSCxNQUExQixHQUFtQyxDQUFDLEtBQUtELGFBQUwsQ0FBbUJJLEtBQW5CLEVBQTBCSCxNQUE5RDtBQUNELE9BOUJPO0FBK0JSVyxxQkEvQlEsMkJBK0JTUixLQS9CVCxFQStCZ0JDLENBL0JoQixFQStCbUI7QUFDekJRLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbkNPLEs7Ozs7O29DQXNDTztBQUNmVCxjQUFRQyxHQUFSLENBQVksZUFBWjtBQUNEOzs7O0VBaEtnQ00sZUFBS0csSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5qCH5pCc57SiJ1xuICAgIH07XG5cbiAgICBjb21wb25lbnRzID0ge307XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGFiczogW1xuICAgICAgICB7dGl0bGU6ICfnsr7noa7mn6Xor6InLCBpZDogMH0sXG4gICAgICAgIHt0aXRsZTogJ+i/keS8vOafpeivoicsIGlkOiAxfSxcbiAgICAgICAge3RpdGxlOiAn55Sz6K+35Lq6JywgaWQ6IDJ9LFxuICAgICAgICB7dGl0bGU6ICfllYblk4Ev5pyN5YqhJywgaWQ6IDN9LFxuICAgICAgICB7dGl0bGU6ICfms6jlhozlj7cnLCBpZDogNH0sXG4gICAgICAgIHt0aXRsZTogJ+S7o+eQhuWFrOWPuCcsIGlkOiA1fSxcbiAgICAgICAge3RpdGxlOiAn5Zu+5b2i5pCc57SiJywgaWQ6IDZ9XG4gICAgICBdLFxuICAgICAgdGFiQWN0aXZlOiAtMSxcbiAgICAgIHNob3dUYWJEcm9wbWVudTogZmFsc2UsXG4gICAgICBzaG93VGFiRHJvcG1lbnVCb2R5ZXI6IC0xLFxuICAgICAgc2hvd0ppbnNpRHJvcG1lbnU6IGZhbHNlLFxuICAgICAgdGFiRHJvcG1lbnU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn55Sz6K+35Lq6JyxcbiAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfmt7HlnLPohb7orq/np5HmioDmnInpmZDlhazlj7gnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5YyX5Lqs5qKm55+l572R56eR5oqA5pyJ6ZmQ5YWs5Y+4JywgbnVtOiA3fVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6Z2e6KeE6IyDJyxcbiAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgYm9keWVyOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfpnZ7op4TojIPllYonLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAn6Z2e6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+mdnuinhOiMg+WViicsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+inhOiMgycsXG4gICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+inhOiMg+WViicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICfop4TojIPllYonLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfnlLPor7fnsbvliKsnLFxuICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICBib2R5ZXI6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMSDljJblrabljp/mlpknLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDIg6aKc5paZ5rK55ryGJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAxIOWMluWtpuWOn+aWmScsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcwMiDpopzmlpnmsrnmvIYnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMDEg5YyW5a2m5Y6f5paZJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzAyIOminOaWmeayuea8hicsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+azleW+i+eKtuaAgScsXG4gICAgICAgICAgaWQ6IDE0LFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn5Ye65YW35rOo5YaM6K+B5piOJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+aSpOmUgOWkjeWuoeS4rScsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+eUs+ivt+W5tOS7vScsXG4gICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAnMjAxOCcsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICcyMDE3JywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJzIwMTgnLCBudW06IDd9LFxuICAgICAgICAgICAge3RpdGxlOiAnMjAxNycsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBqaW5zaURyb3BtZW51OiBbXG4gICAgICAgIHt0aXRsZTogJ+eyvuehrue7k+aenCcsIGlkOiAxMCwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5Yqg5a2XJywgaWQ6IDExLCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflh4/lrZcnLCBpZDogMTIsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+WPmOWtlycsIGlkOiAxMywgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5o2i5bqPJywgaWQ6IDE0LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICfpg6jliIbnm7jlkIwnLCBpZDogMTUsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+aLvOmfsycsIGlkOiAxNiwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn54m55q6K5a2X56ymJywgaWQ6IDE3LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflvaLov5HlrZcnLCBpZDogMTgsIGFjdGl2ZTogdHJ1ZX1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFiU2VhcmNoIChpbmRleCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgdGhpcy50YWJBY3RpdmUgPSBpbmRleFxuICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51ID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnNob3dUYWJEcm9wbWVudSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNob3dNZW51Y29udCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51Qm9keWVyID0gaW5kZXhcbiAgICAgIH0sXG4gICAgICBoaWRlTWVudWNvbnQgKGUpIHtcbiAgICAgICAgdGhpcy5zaG93VGFiRHJvcG1lbnUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNob3dKaW5zaURyb3BtZW51IChpZCwgZSkge1xuICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gIXRoaXMuc2hvd0ppbnNpRHJvcG1lbnVcbiAgICAgIH0sXG4gICAgICBoaWRlSmluc2lEcm9wbWVudSAoZSkge1xuICAgICAgICB0aGlzLnNob3dKaW5zaURyb3BtZW51ID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBqaW5zaURyb3BtZW51SGlnaCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHRoaXMuamluc2lEcm9wbWVudVtpbmRleF0uYWN0aXZlID0gIXRoaXMuamluc2lEcm9wbWVudVtpbmRleF0uYWN0aXZlXG4gICAgICB9LFxuICAgICAgbGlua0JyYW5kRGV0YWlsIChpbmRleCwgZSkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJ2JyYW5kRGV0YWlsJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20gKCkge1xuICAgICAgY29uc29sZS5sb2coJ+mhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsCcpXG4gICAgfVxuIH1cblxuIl19