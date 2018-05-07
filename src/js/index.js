import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header'
import ComponentBody from './components/bodyIndex'
import ComponentFooter from './components/footer'

class Index extends React.Component {
    constructor() {
        super();
        this.state = {age: 0}
        this.ageChange = this.ageChange.bind(this);
    }

    ageChange(event,x) {
        console.log('x:'+x);
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div>
                <ComponentHeader/>
                <ComponentBody fathervalue='父组件的值' ageChange={this.ageChange}/>
                <ComponentFooter/>
                <p>我是子组件传过来的年龄:{this.state.age}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('box')
);