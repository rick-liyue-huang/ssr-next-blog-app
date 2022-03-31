import React, {useEffect, useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from 'reactstrap';
import {APP_NAME} from "../config";
import Link from 'next/link';
import {signoutAction, isAuth} from "../actions/authAction";
import Router from 'next/router';


export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		process.browser && setIsBrowser(true);
	}, []);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<Link href="/">
					<NavLink className="font-weight-bold">{APP_NAME}</NavLink>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						{isBrowser && !isAuth() && (
							<React.Fragment>
								<NavItem>
									<Link href="/signin">
										<NavLink style={{'cursor': "pointer"}}>SIGN IN</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href="/signup">
										<NavLink style={{'cursor': "pointer"}}>SIGN UP</NavLink>
									</Link>
								</NavItem>
							</React.Fragment>
						)}

						{isBrowser && isAuth() && (isAuth().role === 0) && (
							<NavItem>
								<NavLink href={'/profile'}>
									{`${isAuth().name.toUpperCase()}'s PROFILE`}
								</NavLink>
							</NavItem>
						)}

						{isBrowser && isAuth() && (isAuth().role === 1) && (
							<NavItem>
								<NavLink href={'/admin'}>
									{`${isAuth().name.toUpperCase()}'s PROFILE`}
								</NavLink>
							</NavItem>
						)}

						{isBrowser && isAuth() && (
							<NavItem>
								<NavLink style={{ cursor: 'pointer' }} onClick={() => signoutAction(() => Router.replace(`/signin`))}>
									SIGN OUT
								</NavLink>
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
