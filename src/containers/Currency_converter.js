import React from "react";
import {
    Form,
    FormGroup,
    Input,
    Row,
    Col,
} from "reactstrap";
import { connect } from "react-redux";
import { currencyConverter } from "../actions/currency_converter";

class Currency_converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value_first: {
                value: '',
                isTouched: false
            },
            value_two: {
                value: '',
                isTouched: false
            },
            currency_base: {
                value: 'AUD',
                isTouched: false
            },
            currency_change: {
                value: 'USD',
                isTouched: false
            },
        }
    }

    onChangeValue = (field, value) => {
        let f = this.state[field];
        f.value = value;
        this.setState({
            field: f
        });
    }

    onTouched = async (field) => {
        let f = this.state;
        if (f.value_first.value >= 0 && f.currency_change.value !== f.currency_base.value ) {
            await this.props.currencyConverter(f.currency_base.value, f.currency_change.value);
            let data =  this.props.data_converter.rates[f.currency_change.value] 
                        ? this.props.data_converter.rates[f.currency_change.value] 
                        : 1;

            f.value_two.value = f.value_first.value * Number(data);
            f.value_two.value = f.value_two.value > 0 ? Math.round((f.value_two.value ) * 100) / 100 : "";
            this.setState({ 
                f 
            });
        } else if ( f.value_first.value >= 0 && f.currency_change.value === f.currency_base.value ) {
            f.value_two.value  = f.value_first.value;
            this.setState({ 
                f
            });
        }
    }

    render() {
        return (
            <div className="Home">
                <h1>Currency Converter App</h1>
                <Form className="Home__Form">
                    <Row className="Home__Form__Row">
                        <Col md={6} sm={12}>
                            <FormGroup>
                                <Input
                                    type="number"
                                    min="0"
                                    onChange={(e) => this.onChangeValue("value_first", e.target.value)}
                                    value={this.state.value_first.value}
                                    onBlur={() => this.onTouched('value_first')}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} sm={12}>
                            <FormGroup>
                                <Input
                                    type="select"
                                    onChange={(e) => this.onChangeValue("currency_base", e.target.value)}
                                    value={this.state.currency_base.value}
                                    onBlur={() => this.onTouched('currency_base')}
                                >
                                    <option value="AUD">AUD</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="NZD">NZD</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="Home__Form__Row">
                        <Col md={6} sm={12}>
                            <FormGroup>
                                <Input
                                    type="number"
                                    min={0}
                                    onChange={(e) => this.onChangeValue("value_two", e.target.value)}
                                    value={this.state.value_two.value}
                                    onBlur={() => this.onTouched('value_two')}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6} sm={12}>
                            <FormGroup>
                                <Input
                                    type="select"
                                    onChange={(e) => this.onChangeValue("currency_change", e.target.value)}
                                    value={this.state.currency_change.value}
                                    onBlur={() => this.onTouched('currency_change')}
                                >
                                    <option value="AUD">AUD</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="NZD">NZD</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div >
        )
    }
}

const mapStateToProps = store => {
    return {
        data_converter: store.currency_converter.data,
    };
};

export default connect(
    mapStateToProps, {
        currencyConverter
    }
)(Currency_converter);