import React from 'react';
import Cardsnumber from './cardnumber';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1>{this.props.name}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center" >
                        <Cardsnumber icon={"fas fa-clock"} />
                        <Cardsnumber number={this.props.num4} />
                        <Cardsnumber number={this.props.num3} />
                        <Cardsnumber number={this.props.num2} />
                        <Cardsnumber number={this.props.num1} />
                    </div>
                </div>
                
                
            </div>
        )
    }
}


export default Home;