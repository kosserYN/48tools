/* 软件首页 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';
import IndexedDB from 'indexeddb-tools';
import style from './style.sass';
import option from '../pubmicMethod/option';

/* 初始化所有的数据库 */
const { name, key, data } = option.indexeddb.objectStore.liveCache;
IndexedDB(option.indexeddb.name, option.indexeddb.version, {
  success: function(et, event){
    this.close();
  },
  upgradeneeded: function(et, event){
    // 这张表存储的是直播抓取页面的自动录制配置
    if(!this.hasObjectStore(name)){
      this.createObjectStore(name, key, data)
    }
    this.close();
  }
});

class Index extends Component{
  render(){
    return(
      <div className={ style.body }>
        <h1 className={ style.title }>48视频剪辑应援工具</h1>
        <p className={ style.text }>
          本软件遵循
          <b>GNU General Public License v3.0</b>
          许可证，非商用，如有问题请发送到邮箱duanhaochen@126.com。
        </p>
        <p className={ style.text }>
          源代码托管地址：
          <Icon type="github" />
          <span className={ style.url }>https://github.com/duan602728596/48tools</span>
          。
        </p>
        <p className={ style.text }>
          图片来自
          <b>SNH48</b>
          、
          <b>BEJ48</b>
          的成员，都是我的推，请给我的推集资吧……
        </p>
        <Row type="flex" align="top" justify="start">
          <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
            <dl className={ style.linkGroup }>
              <dt>
                <Link to="/LiveCache" title="口袋48直播抓取">
                  <img src={ require('./image/hty1.jpg') } alt="口袋48直播抓取" />
                </Link>
              </dt>
              <dd>
                <Link to="/LiveCache">直播抓取</Link>
              </dd>
            </dl>
          </Col>
          <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
            <dl className={ style.linkGroup }>
              <dt>
                <Link to="/PlayBackDownload" title="口袋48录播下载">
                  <img src={ require('./image/xsy1.jpg') } alt="口袋48录播下载" />
                </Link>
              </dt>
              <dd>
                <Link to="/PlayBackDownload">录播下载</Link>
              </dd>
            </dl>
          </Col>
          <Col xl={ 4 } lg={ 4 } md={ 6 } sm={ 8 } xs={ 12 }>
            <dl className={ style.linkGroup }>
              <dt>
                <Link to="/BiliBili" title="B站直播抓取">
                  <img src={ require('./image/lyy1.jpg') } alt="B站直播抓取" />
                </Link>
              </dt>
              <dd>
                <Link to="/BiliBili">B站直播抓取</Link>
              </dd>
            </dl>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Index;