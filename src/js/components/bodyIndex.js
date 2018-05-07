import React from 'react';

export default class ComponentBody extends React.Component {
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');

    }

    constructor() {
        super();
        this.state = {userdata: "男"};
    }

    changeUserData(data) {
        this.setState({userdata: data})
    }

    render() {
        console.log('render');
        var username = '曹海';
        var disable = true;
        setTimeout(() => {
            this.setState({userdata: '女'});
        }, 4000);
        return (
            <div>
                {/*我是注释*/}
                <h2>这是内容/1</h2>
                <p>{username == '' ? '用户没有登陆' : '用户名：' + username}</p>
                <input type="button" value="我是按钮" disabled={disable}/>
                <p>{this.state.userdata}</p>
                <input type="button" value="改变性别" onClick={this.changeUserData.bind(this, '女')}/>
                <p>我是父组件传过来的值：{this.props.fathervalue}</p>
                <input type="text" onChange={this.props.ageChange.apply(90)}/>
            </div>
        );
    }
}