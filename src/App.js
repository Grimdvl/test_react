import { Component } from 'react';
import './App.css';

// const Header = () => {
//   return <h2>Hello World!</h2>;
// }

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input placeholder={holder} type='text' style={styledField}/>;
// }

// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//     const styledField = {
//       width: '300px'
//     };

//     return <input placeholder={holder} type='text' style={styledField}/>;
//   }
// }

// function Btn() {
//   const text = 'Log in';
//   const logged = true;

//   return <button>{logged ? 'Enter' : text}</button>
//   // const res = () => {
//   //   return 'Log in';
//   // }
//   // const p = <p>Log in</p>;
// }

// function WhoAmI ({name, surname, link}) {
// 	return (
// 		<div>
// 			{/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
// 			<h1>My name is {name()}, surname - {surname}</h1>
// 			<a href={link}>My profile</a>
// 		</div>
// 	)
// }

// ПРОПСЫ ТОЛЬКО ДЛЯ ЧТЕНИЯ ИХ НЕЛЬЗЯ ИЗМЕНЯТЬ!!!
//Состояние используеться для того что бы отслеживать состояние каждого например (слайдера) отдельно тобишь на каком слайде и на каком индексе каждый из них находиться что бы быть независимыми другот друга
class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: ''
		}
		// Старый метод что бы классы не выдавали ошибки вместо этого можно просто импользовать стрелочную функцию
		// this.nextYear = this.nextYear.bind(this);
	}

	nextYear = () => {
		//Сетстейт Запускает перерисовку всех компонентов а именно метод Рендер, она запускаеться асинхронно по этому нужно использовать колбек функцию, круглая скобка заменяет return
		this.setState(state => ({
			years: state.years + 1
		}));
	}

	commitInputChanges = (e) => {
		this.setState({
			position: e.target.value
		});
	}

	render() {
		const {name, surname, link} = this.props;
		const {position, years} = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, 
					surname - {surname}, 
					age - {years}, 
					position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={this.commitInputChanges}/>
				</form>
			</div>
		)
	}
}

function App() {
	return (
		<div className="App">
			{/* <Header/> */}
			{/* <Field/> */}
			{/* <Btn/> */}
			{/* можно передавать обьекты */}
			{/* <WhoAmI name={{firstName: "John"}} surname="Smith" link="https://github.com/Grimdvl"/> */}
			{/* можно передавать чисто сами пропсы */}
			{/* <WhoAmI name="Alex" surname="Shepard" link="https://github.com/Grimdvl"/> */}
			{/* можно передавать функции */}
			{/* <WhoAmI name={() => {return "Alex"}} surname="Shepard" link="https://github.com/Grimdvl"/> */}
			<WhoAmI name="Alex" surname="Shepard" link="https://github.com/Grimdvl"/>
			<WhoAmI name="Jhon" surname="Smith" link="https://github.com/Grimdvl"/>
		</div>
	);
}

// export {Header};
export default App;
