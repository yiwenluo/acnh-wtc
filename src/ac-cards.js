import React from 'react';
import './ac-cards.css'

export class AcCards extends React.Component {

  render() {
    let cards = [];

    const catchables = [].concat(this.props.fish).concat(this.props.bugs);
    const sorted = catchables.sort((a, b) => {
      return b.value - a.value;
    });

    for (const item of sorted) {
      cards.push(<AcCard 
          key={item.name}
          name={item.name} 
          icon={item.icon} 
          location={item.location} 
          value={item.value} 
          size={item.size}
          time={item.time}
          month={item.month}/>
      );
    }

    // for (const bug of this.props.bugs) {
    //   cards.push(<AcCard 
    //       key={bug.name}
    //       name={bug.name} 
    //       icon={bug.icon} 
    //       location={bug.location} 
    //       value={bug.value} 
    //       time={bug.time}
    //       month={bug.month}/>
    //   );
    // }

    // const rayIcon = 'https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png/revision/latest/scale-to-width-down/96?cb=20200401003129';
    // const tadIcon = 'https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-tadpole.png/revision/latest/scale-to-width-down/96?cb=20200401003129';
    // const HammerheadIcon = 'https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-hammerheadshark.png/revision/latest/scale-to-width-down/96?cb=20200401003129';

    // cards = [
    //   (<AcCard key="ray" name="Ray" icon={rayIcon} location="Sea" value="3000" size="X Large"/>),
    //   (<AcCard key="tadpole" name="Tadpole" icon={tadIcon} location="Pond" value="100" size="Smallest"/>),
    //   (<AcCard key="shark" name="Hammerhead Shark" icon={HammerheadIcon} location="Sea" value="18000" size="Largest"/>),
    // ];

    
    return (
      <div className="card-list">
        {cards}
      </div>
    );
  }
}

class AcCard extends React.Component {

  render() {
    return (
      <div className="card">        
        <div className="row">
          <div className="col">
            <div className="name">{this.props.name}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="value">{this.props.value}</div>
          </div>
          <div className="col">
            <img className="icon" src={this.props.icon} />
          </div>
        </div>
        <div className="row"> 
          <div className="metadata location" >
            {this.props.location}
          </div>
          {this.props.size && 
              (<div className="metadata size">
                {this.props.size}
              </div>)
          }
          <div className="metadata time">
            {this.props.time || '4PM - 9AM.x'}
          </div>
          <div className="metadata month">
          {this.props.month || 'Nov. - Mar.x'}
          </div>
        </div>
      </div>
    );
  }
}