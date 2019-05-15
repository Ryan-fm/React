import React,{Component} from 'react';
import {Tag} from 'antd';
const tab={
    top:{},
    good:{},
    job:{},
    share:{},
    ask:{},
    dev:{}
}
export default class TxtTag extends Component{
    render(){
        console.log(this.props);
        return <Tag>置顶</Tag>
    }
}