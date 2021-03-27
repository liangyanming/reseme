import React from "react";
import P2 from './P2';
import './index.css';

export default function ForJob(props) {
  const { offset, hight, location } = props;
  return <div className="forjob">
    {
      location === 'left' ? <>
        <div id={1} className="job-item" style={(offset * 3 / hight < 1) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <div
            className="job-title"
          >
            <a className="company" onClick={()=>window.open("https://www.bonc.com.cn/")}>东方国信</a>
          </div>
          <p>专注大数据行业20余年，以卓越的大数据软件产品和解决方案服务全球50余个国家的数千客户，日处理数据量3万亿条、日查询数据量70万亿条，是我国独立第三方、为客户加工数据领先的大数据上市企业。</p>
          <p>也是本人职业生涯的开端，在这学习了很多大数据的知识，也是从这开始接触的React</p>
        </div>
        <div id={2} className="job-item" style={((offset * 3 / hight > 1) && (offset * 3 / hight < 2)) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <div
            className="job-title"
          >
            <a className="company">苏宁</a>
          </div>
          <p>嗯……南京扛把子也不用介绍啥了</p>
          <p>在苏宁只有近半年的工作经历，虽然时间不长，但也接触了很多大型项目的宝贵经验</p>
          <p>当时的工作内容主要是一些数据可视化的界面以及框架的更迭</p>
        </div>
        <div id={3} className="job-item" style={(offset * 3 / hight > 2) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <div
            className="job-title"
          >
            <a className="company" onClick={()=>window.open("https://homepage.minbofin.com")}>江苏铭博（北京新治科技）</a>
          </div>
          <p>定位于法律科技服务，致力于打造互联网金融资产一站式司法处置平台，平台为标准金融类案提供批量化调诉执全流程解决方案，通过互联网技术，将金融机构、律所与法院系统进行全面升级与对接，实现资产处置和司法调诉的深度结合，相较于传统诉讼模式，具有全流程自动化、集约化、智能化等优势，极大提高了司法处置效率。</p>
          <P2 style={{ textIndent: 0 }}>毕业后第三份工作，也是第一次在创业型公司工作，研发团队不大但是大家相处的很融洽</P2>
        </div>
      </> :
      <>
        <div id={4} className="job-item" style={(offset * 3 / hight < 1) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <p>工作时间: 2016年-2018年</p>
          <p>职位: 开发工程师</p>
          <p>参与项目:</p>
          <P2>黑龙江电信互联网行为分析大数据平台</P2>
          <P2>黑龙江电信小区宽带防控系统</P2>
          <P2>广州电信大数据挖掘能力平台</P2>
          <P2>广州电信大数据分析平台</P2>
          <P2>2018中国建设银行移动金融业务-普惠之门</P2>
          <P2>EPM大数据精准化营销平台</P2>
          <p>主要工作内容:</p>
          <P2>用户手册编写，对外接口文档编写，按照设计文档设计后端服务api接口，按照UI的原型开发前端页面，整合接口与前端页面对接，完成测试并配合项目上线工作</P2>
          <p>技术栈:</p>
          <P2>java & React+Redux & mysql/Oracle </P2>
        </div>
        <div id={5} className="job-item" style={((offset * 3 / hight > 1) && (offset * 3 / hight < 2)) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <p>工作时间: 2018年-2019年</p>
          <p>职位: 前端开发工程师</p>
          <p>参与项目:</p>
          <P2><a href="" onClick={(e)=>{ window.open("https://edao.suning.com"); e.stopPropagation()}}>数据易道</a></P2>
          <p>主要工作内容:</p>
          <P2>数据可视化展示，react15 + rechart => react16 + bizchart 的迁移工作</P2>
          <p>技术栈:</p>
          <P2>react</P2>
        </div>
        <div id={6} className="job-item" style={(offset * 3 / hight > 2) ? { opacity: 1, zIndex: 2 } : { opacity: 0, zIndex: 1 }}>
          <p>工作时间: 2019年-2021年</p>
          <p>职位: 前端开发工程师、前端主管</p>
          <p>主导项目:</p>
          <P2 className="company p2" onClick={()=>window.open("https://homepage.minbofin.com")}>北京新治科技官网</P2>
          <P2 className="company p2" onClick={()=>window.open("https://court-dev.minbofin.com")}>数智法庭</P2>
          <P2>数智法庭小程序</P2>
          <P2 className="company p2" onClick={()=>window.open("https://plaintiff-dev.minbofin.com")}>天泽云法诉云平台</P2>
          <p>主要工作内容:</p>
          <P2>搭建系统，web端和小程序端的开发</P2>
          <p>主要技术栈:</p>
          <P2>react16,react17,canvas,webSocket</P2>
        </div>
      </>
    }
  </div>
}