import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;

    return (
      <div>
        <span>불리언값: {String(boolValue)}</span>        <br/>
        <span>숫자값: {numValue}</span>         <br/>
        <span>배열값: {arrayValue[0]},{arrayValue[1]},{arrayValue[2]}</span>        <br/>
        <span>객체값: {String(objValue.name)}, {String(objValue.age)}, {JSON.stringify(objValue)}</span>  <br/>
        <span>노드값: {nodeValue}</span>          <br/>
        <span>함수값: {String(funcValue)}</span>   <br/>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
 } 

export default ChildComponent;
