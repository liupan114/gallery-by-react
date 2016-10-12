require('normalize.css/normalize.css');
require('styles/App.scss');
// 获取图片相关数据
var imageDatas = require('../data/imagedatas.json')
import React from 'react';

// 图片名信息转化为图片URL信息
function genImageURL(imageDatasArr){
	for (var i = 0,j = imageDatasArr.length;i < j;i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
}
imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage" ref="stage">
            <section className="img-sec">
                {imgFigures}
            </section>
            <nav className="controller-nav">
                {controllerUnits}
            </nav>
        </section>
     
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
