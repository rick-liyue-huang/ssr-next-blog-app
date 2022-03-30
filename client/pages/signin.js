import React from 'react';
import Layout from "../components/Layout";
import {SignInComponent} from "../components/auth/signInComponent";


const SignInPage = () => {
	return (
		<Layout>
			<h2 className={'text-center pt-4 pb-4'}>SIGN IN</h2>
			<div className={'row'}>
				<div className="col-md-8 offset-md-2">
					<SignInComponent />
				</div>
			</div>
		</Layout>
	);
};

export default SignInPage;
