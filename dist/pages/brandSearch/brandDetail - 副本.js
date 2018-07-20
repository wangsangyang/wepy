'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '商标详情'
    }, _this.components = {}, _this.data = {
      tabs: [{ title: '精确查询', id: 0 }, { title: '近似查询', id: 1 }],
      tabActive: -1,
      showJinsiDropmenu: false,
      tabDropmenu: [{
        title: '申请人',
        id: 10,
        bodyer: [{ title: '深圳腾讯科技有限公司', num: 7 }, { title: '北京梦知网科技有限公司', num: 7 }]
      }, {
        title: '非规范',
        id: 11,
        bodyer: [{ title: '非规范啊', num: 7 }, { title: '非规范啊', num: 7 }, { title: '非规范啊', num: 7 }]
      }],
      jinsiDropmenu: [{ title: '精确结果', id: 10, active: true }, { title: '加字', id: 11, active: true }, { title: '减字', id: 12, active: true }, { title: '变字', id: 13, active: true }, { title: '换序', id: 14, active: true }, { title: '部分相同', id: 15, active: true }, { title: '拼音', id: 16, active: true }, { title: '特殊字符', id: 17, active: true }, { title: '形近字', id: 18, active: true }]
    }, _this.methods = {
      showMenucont: function showMenucont(index, e) {
        console.log(index);
        this.showTabDropmenuBodyer = index;
      },
      hideMenucont: function hideMenucont(e) {
        this.showTabDropmenu = false;
      },
      jinsiDropmenuHigh: function jinsiDropmenuHigh(index, e) {
        console.log(index);
        console.log(e);
        this.jinsiDropmenu[index].active = !this.jinsiDropmenu[index].active;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kRGV0YWlsIC0g5Ymv5pysLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGFicyIsInRpdGxlIiwiaWQiLCJ0YWJBY3RpdmUiLCJzaG93Smluc2lEcm9wbWVudSIsInRhYkRyb3BtZW51IiwiYm9keWVyIiwibnVtIiwiamluc2lEcm9wbWVudSIsImFjdGl2ZSIsIm1ldGhvZHMiLCJzaG93TWVudWNvbnQiLCJpbmRleCIsImUiLCJjb25zb2xlIiwibG9nIiwic2hvd1RhYkRyb3BtZW51Qm9keWVyIiwiaGlkZU1lbnVjb250Iiwic2hvd1RhYkRyb3BtZW51Iiwiamluc2lEcm9wbWVudUhpZ2giLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxZQUFNLENBQ0osRUFBQ0MsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLENBQXBCLEVBREksRUFFSixFQUFDRCxPQUFPLE1BQVIsRUFBZ0JDLElBQUksQ0FBcEIsRUFGSSxDQUREO0FBS0xDLGlCQUFXLENBQUMsQ0FMUDtBQU1MQyx5QkFBbUIsS0FOZDtBQU9MQyxtQkFBYSxDQUNYO0FBQ0VKLGVBQU8sS0FEVDtBQUVFQyxZQUFJLEVBRk47QUFHRUksZ0JBQVEsQ0FDTixFQUFDTCxPQUFPLFlBQVIsRUFBc0JNLEtBQUssQ0FBM0IsRUFETSxFQUVOLEVBQUNOLE9BQU8sYUFBUixFQUF1Qk0sS0FBSyxDQUE1QixFQUZNO0FBSFYsT0FEVyxFQVNYO0FBQ0VOLGVBQU8sS0FEVDtBQUVFQyxZQUFJLEVBRk47QUFHRUksZ0JBQVEsQ0FDTixFQUFDTCxPQUFPLE1BQVIsRUFBZ0JNLEtBQUssQ0FBckIsRUFETSxFQUVOLEVBQUNOLE9BQU8sTUFBUixFQUFnQk0sS0FBSyxDQUFyQixFQUZNLEVBR04sRUFBQ04sT0FBTyxNQUFSLEVBQWdCTSxLQUFLLENBQXJCLEVBSE07QUFIVixPQVRXLENBUFI7QUEwQkxDLHFCQUFlLENBQ2IsRUFBQ1AsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLEVBQXBCLEVBQXdCTyxRQUFRLElBQWhDLEVBRGEsRUFFYixFQUFDUixPQUFPLElBQVIsRUFBY0MsSUFBSSxFQUFsQixFQUFzQk8sUUFBUSxJQUE5QixFQUZhLEVBR2IsRUFBQ1IsT0FBTyxJQUFSLEVBQWNDLElBQUksRUFBbEIsRUFBc0JPLFFBQVEsSUFBOUIsRUFIYSxFQUliLEVBQUNSLE9BQU8sSUFBUixFQUFjQyxJQUFJLEVBQWxCLEVBQXNCTyxRQUFRLElBQTlCLEVBSmEsRUFLYixFQUFDUixPQUFPLElBQVIsRUFBY0MsSUFBSSxFQUFsQixFQUFzQk8sUUFBUSxJQUE5QixFQUxhLEVBTWIsRUFBQ1IsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLEVBQXBCLEVBQXdCTyxRQUFRLElBQWhDLEVBTmEsRUFPYixFQUFDUixPQUFPLElBQVIsRUFBY0MsSUFBSSxFQUFsQixFQUFzQk8sUUFBUSxJQUE5QixFQVBhLEVBUWIsRUFBQ1IsT0FBTyxNQUFSLEVBQWdCQyxJQUFJLEVBQXBCLEVBQXdCTyxRQUFRLElBQWhDLEVBUmEsRUFTYixFQUFDUixPQUFPLEtBQVIsRUFBZUMsSUFBSSxFQUFuQixFQUF1Qk8sUUFBUSxJQUEvQixFQVRhO0FBMUJWLEssUUF1Q1BDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDTUMsS0FETixFQUNhQyxDQURiLEVBQ2dCO0FBQ3RCQyxnQkFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0EsYUFBS0kscUJBQUwsR0FBNkJKLEtBQTdCO0FBQ0QsT0FKTztBQUtSSyxrQkFMUSx3QkFLTUosQ0FMTixFQUtTO0FBQ2YsYUFBS0ssZUFBTCxHQUF1QixLQUF2QjtBQUNELE9BUE87QUFRUkMsdUJBUlEsNkJBUVdQLEtBUlgsRUFRa0JDLENBUmxCLEVBUXFCO0FBQzNCQyxnQkFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxhQUFLTCxhQUFMLENBQW1CSSxLQUFuQixFQUEwQkgsTUFBMUIsR0FBbUMsQ0FBQyxLQUFLRCxhQUFMLENBQW1CSSxLQUFuQixFQUEwQkgsTUFBOUQ7QUFDRDtBQVpPLEs7Ozs7RUE5Q3VCVyxlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6ImJyYW5kRGV0YWlsIC0g5Ymv5pysLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYbmoIfor6bmg4UnXG4gICAgfTtcblxuICAgIGNvbXBvbmVudHMgPSB7fTtcblxuICAgIGRhdGEgPSB7XG4gICAgICB0YWJzOiBbXG4gICAgICAgIHt0aXRsZTogJ+eyvuehruafpeivoicsIGlkOiAwfSxcbiAgICAgICAge3RpdGxlOiAn6L+R5Ly85p+l6K+iJywgaWQ6IDF9XG4gICAgICBdLFxuICAgICAgdGFiQWN0aXZlOiAtMSxcbiAgICAgIHNob3dKaW5zaURyb3BtZW51OiBmYWxzZSxcbiAgICAgIHRhYkRyb3BtZW51OiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+eUs+ivt+S6uicsXG4gICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn5rex5Zyz6IW+6K6v56eR5oqA5pyJ6ZmQ5YWs5Y+4JywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+WMl+S6rOaipuefpee9keenkeaKgOaciemZkOWFrOWPuCcsIG51bTogN31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+mdnuinhOiMgycsXG4gICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgIGJvZHllcjogW1xuICAgICAgICAgICAge3RpdGxlOiAn6Z2e6KeE6IyD5ZWKJywgbnVtOiA3fSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+mdnuinhOiMg+WViicsIG51bTogN30sXG4gICAgICAgICAgICB7dGl0bGU6ICfpnZ7op4TojIPllYonLCBudW06IDd9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgamluc2lEcm9wbWVudTogW1xuICAgICAgICB7dGl0bGU6ICfnsr7noa7nu5PmnpwnLCBpZDogMTAsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+WKoOWtlycsIGlkOiAxMSwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5YeP5a2XJywgaWQ6IDEyLCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICflj5jlrZcnLCBpZDogMTMsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+aNouW6jycsIGlkOiAxNCwgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn6YOo5YiG55u45ZCMJywgaWQ6IDE1LCBhY3RpdmU6IHRydWV9LFxuICAgICAgICB7dGl0bGU6ICfmi7zpn7MnLCBpZDogMTYsIGFjdGl2ZTogdHJ1ZX0sXG4gICAgICAgIHt0aXRsZTogJ+eJueauiuWtl+espicsIGlkOiAxNywgYWN0aXZlOiB0cnVlfSxcbiAgICAgICAge3RpdGxlOiAn5b2i6L+R5a2XJywgaWQ6IDE4LCBhY3RpdmU6IHRydWV9XG4gICAgICBdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dNZW51Y29udCAoaW5kZXgsIGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgIHRoaXMuc2hvd1RhYkRyb3BtZW51Qm9keWVyID0gaW5kZXhcbiAgICAgIH0sXG4gICAgICBoaWRlTWVudWNvbnQgKGUpIHtcbiAgICAgICAgdGhpcy5zaG93VGFiRHJvcG1lbnUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGppbnNpRHJvcG1lbnVIaWdoIChpbmRleCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgdGhpcy5qaW5zaURyb3BtZW51W2luZGV4XS5hY3RpdmUgPSAhdGhpcy5qaW5zaURyb3BtZW51W2luZGV4XS5hY3RpdmVcbiAgICAgIH1cbiAgICB9XG4gfVxuXG4iXX0=