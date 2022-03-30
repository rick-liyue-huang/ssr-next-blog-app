import React from 'react';
import Layout from "../components/Layout";
import Link from 'next/link'
import {SignUpComponent} from "../components/auth/SignUpComponent";

const SignUpPage = () => {
	return (
	<Layout>
		<h2 className={'text-center pt-4 pb-4'}>SIGN UP</h2>
		<div className={'row'}>
			<div className="col-md-8 offset-md-2">
				<SignUpComponent />
			</div>
		</div>
	</Layout>
	);
};

export default SignUpPage;
