import { Component} from 'react';
import './FormPage.css';
import SideBar from '../SideBar/SideBar'
import Workspace from '../Workspace/Workspace';

class FormPage extends Component {

  state = {
    isInfoFilled: false,
    pickedTemplate: null,
  }


  clickHandler = type => {
    switch(type) {
      case 'reset': 
          this.setState({
            isInfoFilled: false,
            pickedTemplate: null,
          });
          break;
      case 'choose': 
          this.setState({
            pickedTemplate: null,
          });
          break;
      case 'print': 
          window.print();
          break;
      default:
          console.error('Something went wrong');
    }
  }


  render() {
    
    return (
      <div className="FormPage">
        <SideBar 
          {...this.state}
          clickHandler={this.clickHandler}/>
        <Workspace 
          state={this.state}
          onSetArtboard={picked => this.setState({pickedTemplate: picked}) }
          onInfoFilled={() => this.setState({isInfoFilled: true})}
          />
      </div>
    );
  }
}

export default FormPage;
