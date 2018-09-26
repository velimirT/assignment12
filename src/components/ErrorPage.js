import React from 'react';
import { SideNavWrap } from './Containers';

export default function ErrorPage({
    location
}){
	setTimeout(() => {
		window.location.href = "";
	}, 3000)
    return (
    	<SideNavWrap>
	    	Page not found: {location.pathname}
	    	You'll be redirected in 3sec.
    	</SideNavWrap>
	)
}