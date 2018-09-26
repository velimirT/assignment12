import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideNavEl = styled.aside`
    width: 100px;
    margin: 0px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #414141;
    ul{
    	padding:0;
    	margin: 0;
    }
    li{
    	list-style-type: none;
    	cursor: pointer;
    	min-height: 60px;
    	width: 100px;
    	background-color: #fff;
    	color: #414141;
    	padding-top: 40px;
    	font-size: 20px;
    	text-transform: uppercase;
    }
    li.active{
    	background-color: #23829c;
        color: #fff;
    }
`;

export default function SideNav({
	chosen_place=null, 
	places=[], 
	onClickHome=f=>f,
	onClickPlace=f=>f,
    children=null
}) {

	return (
        <div>
		<SideNavEl>
			<ul>
				<li>
                    <Link to = "home">Home</Link>
                    <Link to = "servey">servey</Link>            
                </li>
			</ul>
        </SideNavEl>
        {children}
        </div>
	)
};

SideNav.propTypes = {
	places: propTypes.array,
	chosen_place: propTypes.string,
	onClickPlace: propTypes.func,
	onClickHome: propTypes.func,
}