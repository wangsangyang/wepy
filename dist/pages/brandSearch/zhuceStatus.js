'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      tabs: [{ title: '精确查询', id: 0 }, { title: '近似查询', id: 1 }]
    }, _this.methods = {
      showMenucont: function showMenucont(index, e) {
        console.log(index);
        this.showTabDropmenuBodyer = index;
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/brandSearch/zhuceStatus'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpodWNlU3RhdHVzLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGFicyIsInRpdGxlIiwiaWQiLCJtZXRob2RzIiwic2hvd01lbnVjb250IiwiaW5kZXgiLCJlIiwiY29uc29sZSIsImxvZyIsInNob3dUYWJEcm9wbWVudUJvZHllciIsImppbnNpRHJvcG1lbnVIaWdoIiwiamluc2lEcm9wbWVudSIsImFjdGl2ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSixFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLElBQUksQ0FBcEIsRUFESSxFQUVKLEVBQUNELE9BQU8sTUFBUixFQUFnQkMsSUFBSSxDQUFwQixFQUZJO0FBREQsSyxRQU9QQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ01DLEtBRE4sRUFDYUMsQ0FEYixFQUNnQjtBQUN0QkMsZ0JBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLGFBQUtJLHFCQUFMLEdBQTZCSixLQUE3QjtBQUNELE9BSk87QUFLUkssdUJBTFEsNkJBS1dMLEtBTFgsRUFLa0JDLENBTGxCLEVBS3FCO0FBQzNCQyxnQkFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxhQUFLSyxhQUFMLENBQW1CTixLQUFuQixFQUEwQk8sTUFBMUIsR0FBbUMsQ0FBQyxLQUFLRCxhQUFMLENBQW1CTixLQUFuQixFQUEwQk8sTUFBOUQ7QUFDRDtBQVRPLEs7Ozs7RUFkdUJDLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoiemh1Y2VTdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuagh+ivpuaDhSdcbiAgICB9O1xuXG4gICAgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRhYnM6IFtcbiAgICAgICAge3RpdGxlOiAn57K+56Gu5p+l6K+iJywgaWQ6IDB9LFxuICAgICAgICB7dGl0bGU6ICfov5HkvLzmn6Xor6InLCBpZDogMX1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd01lbnVjb250IChpbmRleCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgdGhpcy5zaG93VGFiRHJvcG1lbnVCb2R5ZXIgPSBpbmRleFxuICAgICAgfSxcbiAgICAgIGppbnNpRHJvcG1lbnVIaWdoIChpbmRleCwgZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgdGhpcy5qaW5zaURyb3BtZW51W2luZGV4XS5hY3RpdmUgPSAhdGhpcy5qaW5zaURyb3BtZW51W2luZGV4XS5hY3RpdmVcbiAgICAgIH1cbiAgICB9XG4gfVxuXG4iXX0=