import React, {Component} from 'react';
import { Well, Button, FormGroup, InputGroup, FormControl }from 'react-bootstrap';
import uuid from 'uuid/v4';
import Rating from 'react-rating';
class NewParkingInfo  extends Component {


  render(){
    const coordsArr = this.props.polyLine? this.props.polyLine.getPath().getArray() : '';

    const onCancel = () => {
      this.props.onCondChange('isSubmitInfoOpen',false);
      this.props.polyLine.setEditable(false);
      this.props.clearPoly();
    }
    const onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit();
      this.props.polyLine.setEditable(false);
      this.props.onCondChange('isSubmitInfoOpen',false);
    }
    const onChange = key => e => {
      this.props.onChange(key, e.target.value);
    }
    const onClick = key => e => (this.props.onChange(key, e));

    const inputValue = (key) => (
      this.props.polyLine[key] ? this.props.polyLine[key] : ' '
    )
    return  (
      <Well className={this.props.classname}>
        <h3>Coodinates</h3>
          <div>
            {this.props.polyLine?coordsArr.map(coord=>(
              <div key={uuid()}>
                {coord.lat()}, {coord.lng()}
              </div>
            )):''}
          </div>
        <form onSubmit={onSubmit}>
          Enter Parking Info
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Hours</InputGroup.Addon>
                <FormControl
                type="text"
                onChange={onChange('hours')}
                value={inputValue('hours')}
                />
            </InputGroup>

            <InputGroup>
              <InputGroup.Addon>Rate</InputGroup.Addon>
                <FormControl
                type="text"
                onChange={onChange('rate')}
                value={inputValue('rate')}
                />
            </InputGroup>

            <InputGroup>
              <InputGroup.Addon>Comments</InputGroup.Addon>
                <FormControl
                type="text"
                value={inputValue('comment')}
                onChange={onChange('comment')}
                /> 
            </InputGroup>
          </FormGroup>
            Rating:
              <Rating
                emptySymbol={<img src="star-empty.png" className="icon" alt="empty star"/>}
                fullSymbol={<img src="star-full.png" className="icon" alt="full star"/>}
                onClick={onClick('rating')}
                placeholderRating={Number.isInteger(inputValue('rating')) ? inputValue('rating') : 0 }
                placeholderSymbol={<img src="star-full.png" className="icon" alt="full star"/>}
              />
            <br/>
          <Button onClick={onCancel}>Cancel</Button>
         <Button type='submit'>Submit</Button>
        </form>
        <br/>
      </Well>
    )
  }
}


export default NewParkingInfo;