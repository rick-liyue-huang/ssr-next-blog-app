
import {useEffect} from "react";
import Router from 'next/router';
import {isAuth} from "../../actions/authAction";


export const Profile = ({children}) => {

	useEffect(() => {
		if (!isAuth()) {
			Router.push('/signin');
		}
	}, [])

	return (
		<>
			{children}
		</>
	)
}
