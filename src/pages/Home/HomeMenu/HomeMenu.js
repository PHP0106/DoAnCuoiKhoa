import React, { Fragment } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;


export default class Demo extends React.Component {
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  componentDidMount() {
    console.log(this.props, 'props');
  }

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap.lstCumRap?.map((cumRap, index) => {
            return <TabPane tab={
              <div>
                <img src={heThongRap.logo} width="50" /> <br />
                <div className="text-left ml-2">
                  {cumRap.tenCumRap}
                  <p className="text-red-200">Chi tiết</p>
                </div>

              </div>
            } key={index}>

              {cumRap.danhSachPhim?.slice(0, 4).map((phim, index) => {
                return <Fragment key={index}>
                  <div className="my-5" >
                    <div style={{ display: 'flex' }}>
                      <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/100/100" }} />

                      <div className="ml-2">
                        <h1 className="text-2xl text-blue-700" >{phim.tenPhim}</h1>
                        <p>{cumRap.diaChi}</p>
                        <div className="grid grid-cols-6 gap-6">
                          {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <NavLink className="text-xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                          })}
                        </div>
                      </div>


                    </div>

                  </div>
                  <hr />
                </Fragment>
              })}

            </TabPane>
          })}
        </Tabs>

      </TabPane>
    })
  }

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}
        </Tabs>
      </>
    );
  }
}
