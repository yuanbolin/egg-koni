import React from 'react';
import { RegisterEdge } from 'gg-editor';
class KeyEdge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RegisterEdge
        name={'koni-base'}
        config={{
          draw(item) {
            let startPoint = item.getPoints()[0];
            let endPoint = item.getPoints()[1];
            const group = item.getGraphicGroup();
            let keyShape = group.addShape('path', {
              attrs: {
                path: [
                  ['M', startPoint.x, startPoint.y],
                  ['L', endPoint.x, endPoint.y],
                ],
                lineWidth:3,
                stroke:"#555cf1",
              },
            });
            return keyShape;
          },
          // 原本样式
          getStyle() {
            return {
              stroke:"#555cf1",
              lineWidth:3,
            };
          },
          // hover上的样式
          getActivedStyle() {
            return {
              stroke: "#F36364",
              lineWidth:3,
            };
          },
          // 选中样式
          getSelectedStyle() {
            return {
              stroke: "#0CC",
              lineWidth:3,
            };
          }
        }}
      />
    );
  }
}

export default KeyEdge;
