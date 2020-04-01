import React from "react";
import "antd/dist/antd.css";
import { Collapse, Form, Input, InputNumber } from 'antd';


interface Props {
  
}

interface State {
}

const { Panel } = Collapse;
class PaymentForm extends React.Component<Props, State> {
  
  state = {
    key: 1,
  };

  callback(key:any) {
    console.log(key);
  }
  
  /* 
  onChange = (e:any) => {
    console.log('panel checked', e.target.key);
    this.setState({
      key: e.target.value,
    });
  }; */
  
render()


 {
  return (
    
<Collapse accordion defaultActiveKey={['1']} onChange={this.callback}>
    <Panel header="Swish" key="1">
    <Form >
         <Form.Item 
          label="Telefonnummer" 
          hasFeedback validateStatus="success"  
          help="Med Swish betalar du din order snabbt och smidigt via din telefon. Kontrollera att telefonnummeret stämmer."
         >
      <Input id="Phonenumber" />
    </Form.Item>
      </Form>
    </Panel>
    <Panel header="Kortbetalning" key="2">
    <Form>
    <Form.Item 
          label="Kortnummer" 
          hasFeedback validateStatus="success"  
          help="Du kan betala med ditt VISA, Mastercard eller American Express kort."
         >
      <Input id="Phonenumber" />
    </Form.Item>
      <Form.Item label="Månad">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={12} />
        </Form.Item>
        
      </Form.Item>
      <Form.Item label="År">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={20} max={34} />
        </Form.Item>
       
      </Form.Item>
      <Form.Item 
          label="CVC2" 
          hasFeedback validateStatus="success"  
          help="Du finner CVC2-koden på backsidan av ditt bankkort."
         >
      <Input id="CVC2" />
    </Form.Item>
      </Form>
    </Panel>
    <Panel header="Klarna" key="3">
    </Panel>
  </Collapse>

  )}

  }
  
  export default PaymentForm;
  

/* const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`; */


















/* 
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

defaultActiveKey={['1']} onChange={callback}
 */
/* 
state = {
  value: 1,
};

onChange = (e:any) => {
  console.log('radio checked', e.target.value);
  this.setState({
    value: e.target.value,
  });
};
render() {
  const radioStyle = {
    display: 'block',
    height: '2rem',
    lineHeight: '2rem',
  };
  return (

    <Radio.Group onChange={this.onChange} value={this.state.value}>
      <Radio style={radioStyle} value={1}>
        Swish
        {this.state.value === 1 ? <FirstPaymentComponent /> : null}
      </Radio>
      <Radio style={radioStyle} value={2}>
        Kortbetalning
        {this.state.value === 2 ? <SecondPaymentComponent /> : null}
      </Radio>
      <Radio style={radioStyle} value={3}>
        Klarna
        {this.state.value === 3 ? <ThirdPaymentComponent /> : null}
      </Radio>
    </Radio.Group>
    
  );
} */









/* import React, { CSSProperties } from 'react'
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
// import klarna from '../img/klarna-app-logo.png'




class PaymentForm extends React.Component{
  onChange: ((e: RadioChangeEvent) => void) | undefined;
 
  render() {
    return (
      <Radio.Group size="large" onChange={this.onChange} defaultValue="a"  >
       <div style={flexDirection}>
        <Radio.Button value="a" name="payment" style={payment}> Switch</Radio.Button>
        <Radio.Button value="b" name="payment"> Klarna</Radio.Button>
        <Radio.Button value="c" name="payment">BetalKort</Radio.Button>
      </div>
      </Radio.Group>
    );
  }

}
export default PaymentForm

const flexDirection: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}

const payment: CSSProperties = {
  background : 'pink',
  width: '130%'
} */
