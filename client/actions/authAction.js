import fetch from 'isomorphic-fetch';
import { API } from '../config';
import cookie from 'js-cookie';

export const hasWindow = () => {
	return typeof window === 'object'
}

export const signupAction = user => {
	return fetch(`${API}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const signinAction = user => {
	return fetch(`${API}/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};


export const signoutAction = (next) => {
	removeCookie('token');
	removeLocalStorage('user');
	next();

	return fetch(`${API}/signout`, {
		method: 'GET'
	})
		.then(response => {
			console.log('sign out successfull')
		})
		.catch(err => console.log(err));
}

//	manual cookie
export const setCookie = (key, value) => {
	if (hasWindow()) {
		cookie.set(key, value, {
			expires: 1
		})

	}
}

export const removeCookie = (key) => {
	if (hasWindow()) {
		cookie.remove(key, {
			expires: 1
		})
	}
}

export const getCookie = (key) => {
	if (hasWindow()) {
		return cookie.get(key);
	}
}

//	manual localstorage
export const setLocalStorage = (key, value) => {
	if (hasWindow()) {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

export const removeLocalStorage = (key) => {
	if (hasWindow()) {
		localStorage.removeItem(key);
	}
}

export const getLocalStorage = (key) => {
	if (hasWindow()) {
		return localStorage.getItem(key);
	}
}


//	authenticate user

export const authenticate = (data, next) => {
	setCookie('token', data.token);
	setLocalStorage('user', data.user);
	next();
}


export const isAuth = () => {
	if (hasWindow()) {
		const cookieChecked = getCookie('token');
		if (cookieChecked) {
			if (localStorage.getItem('user')) {
				return JSON.parse(localStorage.getItem('user'));
			} else {
				return false;
			}
		}
	}
}
