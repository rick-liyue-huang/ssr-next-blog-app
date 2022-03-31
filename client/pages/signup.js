import React from 'react';
import Layout from "../components/Layout";
import {SignUpComponent} from "../components/auth/SignUpComponent";

const SignUpPage = () => {
	return (
		<Layout>
			<h2 className="text-center pt-4 pb-4">SIGN UP</h2>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<SignUpComponent />
				</div>
			</div>
		</Layout>
	);
};

export default SignUpPage;
