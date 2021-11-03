import React from 'react';
import { Card, Input, Select, Cascader, Button } from 'antd';
import { withPropsAPI } from 'gg-editor';
import styles from './index.less';
import { parseInt } from 'lodash';
const { Option } = Select;
class DetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '注水站',
      options: [
        {
          value: '注水站',
          label: '注水站',
          children: [
            {
              value: '注水站A',
              label: '注水站A',
            },
            {
              value: '注水站B',
              label: '注水站B',
            },
            {
              value: '注水站C',
              label: '注水站C',
            },
          ],
        },
        {
          value: '干线阀',
          label: '干线阀',
          children: [
            {
              value: '干线阀A',
              label: '干线阀A',
            },
            {
              value: '干线阀B',
              label: '干线阀B',
            },
            {
              value: '干线阀C',
              label: '干线阀C',
            },
          ],
        },
        {
          value: '支线阀',
          label: '支线阀',
          children: [
            {
              value: '支线阀A',
              label: '支线阀A',
            },
            {
              value: '支线阀B',
              label: '支线阀B',
            },
            {
              value: '支线阀C',
              label: '支线阀C',
            },
          ],
        },
        {
          value: '注水井',
          label: '注水井',
          children: [
            {
              value: '注水井A',
              label: '注水井A',
            },
            {
              value: '注水井B',
              label: '注水井B',
            },
            {
              value: '注水井C',
              label: '注水井C',
            },
          ],
        },
      ],
    };
  }

  handleSave = () => {
    const { propsAPI } = this.props;
    let data = propsAPI.save();
    console.log(data);
  };

  handleAdd = () => {
    let zhushuizhan = (data) => {
      return {
        type: 'node',
        size: '70*70',
        shape: '管网自建',
        color: '#69C0FF',
        label: data[1],
        x: 55,
        y: 55,
        id: `${parseInt(Math.random() * 250)}`,
        model: {
          id1: 1,
          id2: 2,
          type: 0,
        },
        index: 0,
      };
    };
    let ganxianfa = (data) => {
      return {
        type: 'node',
        size: '70*70',
        shape: '管网自建',
        color: '#FA8C16',
        label: data[1],
        x: 55,
        y: 55,
        id: `${parseInt(Math.random() * 250)}`,
        model: {
          id1: 1,
          id2: 2,
          type: 0,
        },
        index: 0,
      };
    };
    let zhixianfa = (data) => {
      return {
        type: 'node',
        size: '70*70',
        shape: '管网自建',
        color: '#5CDBD3',
        label: data[1],
        x: 55,
        y: 55,
        id: `${parseInt(Math.random() * 250)}`,
        model: {
          id1: 1,
          id2: 2,
          type: 0,
        },
        index: 0,
      };
    };
    let zhushuijing = (data) => {
      return {
        type: 'node',
        size: '70*70',
        shape: '管网自建',
        color: '#B37FEB',
        label: data[1],
        x: 55,
        y: 55,
        id: `${parseInt(Math.random() * 250)}`,
        model: {
          id1: 1,
          id2: 2,
          type: 0,
        },
        index: 0,
      };
    };
    const { propsAPI } = this.props;
    switch (this.state.type[0]) {
      case '注水站':
        propsAPI.add('node', zhushuizhan(this.state.type));
        break;
      case '干线阀':
        propsAPI.add('node', ganxianfa(this.state.type));
        break;
      case '支线阀':
        propsAPI.add('node', zhixianfa(this.state.type));
        break;
      case '注水井':
        propsAPI.add('node', zhushuijing(this.state.type));
        break;
    }
  };

  handleDelete = () => {
    const { propsAPI } = this.props;
    let arr = propsAPI.getSelected();
    console.log(arr);
    if ((arr || []).length > 0) {
      arr.forEach((item) => {
        propsAPI.remove(item);
      });
    }
  };

  handleLook = () => {
    const { propsAPI } = this.props;
    let arr = propsAPI.getSelected();
    console.log(arr);
    if ((arr || []).length > 0) {
      arr.forEach((item) => {
        console.log(item)
      });
    }
  };

  onChange = (value) => {
    console.log(`selected ${value[1]}`);
    this.setState(
      {
        type: value,
      },
      () => {
        this.handleAdd();
      },
    );
  };

  render() {
    return (
      <Card
        className={styles.detailPanel}
        type="inner"
        size="small"
        title={'操作'}
        bordered={false}
      >
        {/*<Button onClick={this.handleSave}>保存数据</Button>*/}
        {/*<br />*/}
        <Cascader
          options={this.state.options}
          value={[]}
          onChange={this.onChange}
          placeholder="新增节点"
        />
        {/*<Button onClick={this.handleAdd}>新增节点</Button>*/}
        <br />
        <Button onClick={this.handleDelete}>删除节点</Button>
        <Button onClick={this.handleLook}>查看节点</Button>
      </Card>
    );
  }
}

export default withPropsAPI(DetailForm);
