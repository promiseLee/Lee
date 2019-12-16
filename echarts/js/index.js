$(function(){
  // 基于准备好的dom，初始化echarts实例
  let mychart=echarts.init(document.getElementById('main'));  //柱状图
  let myLine=echarts.init(document.getElementById('line'));//折线图
  let mypie=echarts.init(document.getElementById('pie')); //饼图
  let mypiecircle=echarts.init(document.getElementById("piecircle")); //环形图

  // 指定图表的配置项和数据（柱状图+折线图）
  let option={
    title:{
      text:"图表"    //标题
      ,left: 'left',   //距左侧距离（默认标题位于左侧）
        top: 5,   //标题距顶部高度
        left:20,
        textStyle: {
            color: '#000'   //标题颜色
        }
    },
    tooltip:{
      trigger: 'axis',   //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
      axisPointer:{
        type:"line",
        lineStyle:{
          color:"#4396f7"    //线的颜色
          ,opacity:0.4
        }
      }
    },   //提示框组件
    toolbox:{
      show:true,
      feature:{
        magicType: {   //切换
             type: ['line', 'bar']
         },
         restore:{   //还原
           show:true
         }
      }
    }
    ,legend:{   //图例组件
      data:["校区业绩指标","校区业绩"],
      right:90,
      top:5
    }
    ,xAxis:{   //直角坐标系 grid 中的 x 轴
      data:["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11"],
      option:'top', //x 轴的位置   top  bottom
      type:"category",  //'category'目轴    'time' 时间轴    'value' 数值轴   'log' 对数轴
      name :"类型",  //坐标轴名称
      nameLocation:"end",   //坐标轴名称显示位置  'start'开始   'end'结束   'middle' 或者 'center'中间
      min:"",//最小值
      max:"", //最大值
      splitNumber:"",//分隔段数 在类目轴中无效。
      minInterval:"",//自动计算的坐标轴最小间隔大小
      maxInterval:"",//自动计算的坐标轴最大间隔大小
      silent:"",//坐标轴的标签是否响应和触发鼠标事件，默认不响应。
    }
    ,yAxis:{
      show:false,
      name:"销量"
      ,min:800
    }
    ,series:[{  //系列列表
      name:"校区业绩指标"
      ,type:"bar"  //柱状图
      ,data:[900,1200,1000,1300,999,1200,1314,1111,989,1110,1020]
      ,label:{
        show:true,
        position:"insideTop",
        textStyle:{
          color:"#fff"
        }
      }
      ,itemStyle:{
        color:"#4396f7"
      }
    },
    {  //系列列表
      name:"校区业绩"
      ,type:"line"  //柱状图
      ,barMaxWidth:40
      ,data:[952,1200,1100,1200,1209,1150,1004,1001,989,890,1120]
      ,label:{
        show:true,
        position:"top",
        textStyle:{
          color:"#ff6868"
        }
      },
      itemStyle:{
        color:"#ff6868"
      }
    }]
  };


//折线图
  let linedata={
    title:{
      text:'折线图',
      left:"center",
      top:5
      ,textStyle:{
        color:"#ccc"
      }
    },
    legend:{   //图例组件
      data:["2018","2019"],
      right:90,
      top:5
    },
    tooltip:{
      trigger: 'axis',   //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
      axisPointer:{
        type:"line",
        lineStyle:{
          color:"#4396f7"   //线的颜色
          ,opacity:0.4
        }
      }
    },
    toolbox:{
      show:true,
      feature:{
        magicType:{
         type:["line","bar","pie"]
       },
       restore:{   //还原
         show:true
       }
      }
    },
    xAxis:{
      name:"销量",
      data:["羽绒服","围巾","帽子","鞋子"],
      boundaryGap: false,  //留白
    },
    yAxis:{
      axisLabel:{
        show:true,
        inside:false
        },
        min:0,
        max:60,
        scale:true,
       interval:5
    },
    series:[{  //系列列表
      name:"2018"
      ,type:"line"  //折线图
      ,data:[50,15,10,60]
      ,label:{
        show:true,
        position:"top",
        textStyle:{
          color:"#e80303"
        }
      },
        // areaStyle: {},
      itemStyle:{
        color:"#e80303"
      },
      lineStyle:{
        color:"#e80303"
      }
    },
    {
      name:"2019"
      ,type:"line"  //折线图
      ,data:[5,12,50,30]
      ,label:{
        show:true,
        position:"top",
        textStyle:{
          color:"#4396f7"
        }
      },
      itemStyle:{   //折线拐点标志的样式
        color:"#4396f7"
      }
      ,
      lineStyle:{   //线条样式。
        color:"#4396f7"
      }
    }
  ]
};



//饼图
let piedata={
  title:{
    text:"饼图"
    ,left:"center"
    ,top:5
    ,textStyle:{
      color:"#ccc"
    }
  }
  ,legend:{   //图例组件
    data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    ,left:"left"
    ,orient:"vertical"  //垂直显示     horizontal--水平显示
  }
  ,tooltip:{}
  ,series:[{
    name:"访问来源"
    ,type:"pie"
    ,radius:[0,"50%"]  //饼图的半径
    ,center:["55%","60%"]  //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    ,data:[ {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ]
    ,itemStyle:{  //图形样式。
      shadowBlur: 10,  //文字块的背景阴影长度
      shadowOffsetX: 0,  //文字块的背景阴影 X 偏移
      shadowColor: 'rgba(0, 0, 0, 0.5)'   //文字块的背景阴影颜色
    }
    ,label:{  //显示数值
      show:true
      ,position:"ouside"
      ,formatter:"{a}:{c}"
    }
  }]

}

//环形图
let piecircledata={
    title:{
      text:'环形图'
      ,left:'20'
      ,top:5
      ,textStyle:{
        color:"#ccc"
      }
    }
    ,legend:{
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      ,right:20
      ,top:10
      ,orient:'horizontal'
    }
    ,tooltip:{
      trigger: 'item'
      ,formatter:"{a}<br/>{b}:{c} ({d}%)"
    }
    ,series:[{
      name:"访问来源"
      ,type:"pie"
      ,radius: ["30%", '50%']
      ,center:["50%","50%"]  //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
      ,data:[ {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
      ,itemStyle:{
        shadowBlur:10
        ,shadowColor:'rgba(0,0,0,0.2)'
        ,shadowOffsetX:0
      }
      ,labelLine: {
        normal: {  show: false}
      }
      ,avoidLabelOverlap: false
      ,label: {
          normal: {
              show: false,
              position: 'center' //标签的位置
          },
          emphasis: { //高亮的扇区和标签样式
              show: true,
              textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          }
      }
    }]
}


  mychart.setOption(option);  //柱状图
  myLine.setOption(linedata);  //折线图
  mypie.setOption(piedata);//饼图
  mypiecircle.setOption(piecircledata); //环形图

})
