import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
// import {Progress} from 'reactstrap';
import {Filler} from './Filler.js';

const styles = {
        '@keyframes progressLeftToRight':{
            '0%': {
                width: '0%',
                transition:'width .5s ease-in'
            },
            '50%':{
                width: '25%',
                transition:'width .5s ease-in'
            },
            '100%': {
                width: '50%',
                transition:'width .5s ease-in'
            }
        },
        'filler': {
                background: 'linear-gradient(270deg, #37DB77 0%, #B8FEB8 100%)',
                height:'100%',
                borderRadius:'10px',
                animationName: '$progressLeftToRight',
                animationDuration: '1.5s',
                  animationTimingFunction: 'ease-in-out',
                  animationDelay: '.5s',
                  animationFillMode: 'forwards'
        }
    }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div className="progress-bar">
          <Filler percent={50}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
