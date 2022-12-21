import React from 'react'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox, CDBContainer } from 'cdbreact';


export const Footer = () => {
    return (
        <CDBFooter className="shadow bg-secondary text-capitalize">
            
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            {/* <img alt="logo" src="logo" width="30px" /> */}
                            <span className="ml-3 h5 font-weight-bold">online market</span>
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            We are creating High Quality Resources and tools to Aid developers during the
                            developement of their projects
                        </p>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Get to Know Us
                        </p>
                        <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Resources</CDBFooterLink>
                            <CDBFooterLink href="/">About Us</CDBFooterLink>
                            <CDBFooterLink href="/">Contact</CDBFooterLink>
                            <CDBFooterLink href="/">Blog</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Let Us Help You
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Support</CDBFooterLink>
                            <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                            <CDBFooterLink href="/">Sign In</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        online market Payment Products
                        </p>
                        <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Windframe</CDBFooterLink>
                            <CDBFooterLink href="/">Loop</CDBFooterLink>
                            <CDBFooterLink href="/">Contrast</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox
                    display="flex"
                    justifyContent="center"
                    style={{ width: '100%' }}
                    className="mx-auto mt-4"
                >
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="stack-overflow" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="reddit" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="google" />
                    </CDBBtn>
                </CDBBox>
                <small className="text-center mt-5">&copy; Devwares, 2022. All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    )
}

