// グラフの詳細を記載していく

//円グラフ
let pieData = {//グラフデータの変数を定義
     labels: ['Webデザイナー', 'Webデベロッパー','サーバーエンジニア','営業職'],　//グラフの項目名
     series: [14,9,8,6] //データ
};

let pieOptions = {//表示オプション、ここでは幅や高さを指定
     width: '100%',
     height: '440px'
};

new Chartist.Pie('.pie-chart',pieData,pieOptions);

// 棒グラフ

let barData = {
     labels: ['2018年', '2019年', '2020年'],
     series: [[10, 16, 29]]
};

let barOptions = {
     axisY: {  //Y軸の意味
          offset: 60,//グラフを描画するボックスの左端からデータ項目を表示するスペース
          scaleMinSpace: 50, //グラフの罫線の間隔をピクセル数で指示
          labelInterpolationFnc: function(value){ //関数を使って人数のメモリを表示
               return value + '人'
          }
     },
     width: '100%',
     height: '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);
//barDataのデータをbaroptionsの表示方法で.bar-chart要素にBarを表示すると命令する