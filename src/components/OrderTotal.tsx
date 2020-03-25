import React from "react";
import { Row, Col, Button, Badge } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import thumbNail from "../img/hink.png";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import { ProductData } from "../mockAPI";

interface Props {
  product: ProductData
}

interface State {
  count: number,
  show: boolean
}


class OrderTotal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      count: 1,
      show: false
    }
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = (show: boolean) => {
    this.setState({ show });
  };

  render() {
    return (
      <div className="order-wrapper">
        <div className="order-title">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={14}>Produkter</Col>
            <Col span={3}>Antal</Col>
            <Col span={3}>Pris</Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div className="order-items">
          <Row gutter={[8, 16]}>
            <Col span={2}>
              <img src={this.props.product.productImg} alt={this.props.product.alt} />
            </Col>
            <Col span={14}></Col>
            <Col span={3}>
              <MinusCircleOutlined onClick={this.decline} />
              <PlusCircleOutlined onClick={this.increase} />
              <Badge count={this.state.count}></Badge>
              {/* <Text count={this.state.count} strong>
                1
              </Text> */}
            </Col>

            <Col span={3}>{this.props.product.price}</Col>
            <Col span={2}>
              <DeleteOutlined />
            </Col>
          </Row>
        </div>
        <div className="otder-footer">
          <Row gutter={[8, 16]}>
            <Col span={2}></Col>
            <Col span={14}>
              <Button type="primary" htmlType="submit">
                PRESENTKORT
              </Button>
            </Col>
            <Col span={3}>Summa:</Col>
            <Col span={3}>399 kr</Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OrderTotal;
