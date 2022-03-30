import React, { useState } from 'react';
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

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<Link href={'/'}>
					<NavbarBrand className={'font-weight-bold'}>{APP_NAME}</NavbarBrand>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						{
							!isAuth() && (
								<>
									<NavItem>
										<Link  href={'/signin'}>
											<NavLink
												className={'font-weight-bold'}
												style={{cursor:'pointer'}}
											>SIGN IN</NavLink>
										</Link>
									</NavItem>
									<NavItem>
										<Link  href={'/signup'}>
											<NavLink
												className={'font-weight-bold'}
												style={{cursor:'pointer'}}
											>SIGN UP</NavLink>
										</Link>
									</NavItem>
								</>
							)
						}

						{
							isAuth() && (
								<NavItem>
									<NavLink
										onClick={() => signoutAction(() => Router.replace('/signin'))}
										className={'font-weight-bold'}
										style={{cursor:'pointer'}}
									>SIGN OUT</NavLink>
								</NavItem>
							)
						}
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}
