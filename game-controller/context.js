import React, {useReducer} from 'react';
import Controller from './controller';

const initialState = {
	joystick: {
		duration: 0,
		x: 0,
		y: 0,
		velocity: 0,
		slope: 0
	},
	buttons: {}
}

const Ctx = React.createContext(initialState);

export {Ctx}

export default function ControllerContext (props){
	const reducer = (state, action) => 
						action.type == "JOYSTICK" ?
							{joystick: action.payload,buttons: state.buttons} :
							{joystick: state.action,buttons: action.payload}

	const controllerHook = useReducer(reducer,initialState);

	return(
		<Ctx.Provider value={controllerHook}>
			{props.children}
			<Controller/>
		</Ctx.Provider>
	)
}
