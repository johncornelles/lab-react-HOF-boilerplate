import { Component} from 'react';

export default class Hof extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderAll = () => {
    return this.state.userData.map((item) => (
      <li key={item.id} className='list-item'>
        <span>  Id: {item.id}</span>
        <span>  Name: {item.name}</span>
        <span>  UserType: {item.user_type}</span>
      </li>
    ));
  };

  renderUserType = () => {
    return this.state.userData.map((item) => {
        if (item.user_type == "Designer"){
            return <li key={item.id} className='list-item'>
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>UserType: {item.user_type}</span>
                </li>
        }
    })
  }

  renderBasedonJ = () =>  {
    return this.state.userData.map((item) => {
        if (item.name[0] == "J"){
            return <li key={item.id} className='list-item'>
                <span>  Id: {item.id}</span>
                <span>  Name: {item.name}</span>
                <span>  UserType: {item.user_type}</span>
                </li>
        }
    })
  }
  renderAge = () =>  {
    return this.state.userData.map((item) => {
        if (item.age > 28 && item.age <= 50){
            return <li key={item.id} className='list-item'>
                <span>  Id: {item.id}</span>
                <span>  Name: {item.name}</span>
                <span>  UserType: {item.user_type}</span>
                </li>
        }
    })
  }
  renderDesignerExperience = () => {
  const data = this.state.userData;
  const years = data.reduce((count, item) => item.user_type == 'Designer' ? count + item.years : count, 0)
  return years;
};


  render() {
    return (
      <>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>
            {this.renderAll()}
          </ul>
          <h1>Display based on user-type</h1>
          <ul>
            {this.renderUserType()}
          </ul>
          <h1>Filter all data starting with J</h1>
          <ul>{this.renderBasedonJ()}</ul>
          <h1>Filter data based on age greater than 28 and age less than or equal to 50</h1>
          <ul>{this.renderAge()}</ul>
          <h1>Find the Total years of designers</h1>
          <ul>{this.renderDesignerExperience()}</ul>
        </div>
      </>
    );
  }
}
