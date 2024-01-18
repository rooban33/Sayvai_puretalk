import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidebar.css';
import Icon from './home.png';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected);
                navigate('/' + selected);
            }}
            className="mysidenav"
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="" defaultOpen>
                    <NavIcon>
                        <i className="fa fa-fw fa-home"></i>
                    </NavIcon>
                    <NavText>
                        <h3>Home</h3>
                    </NavText>
                </NavItem>
                <NavItem eventKey="logs">
                    <NavIcon>
                        <i className="fa-solid fa-table"></i>
                    </NavIcon>
                    <NavText>
                        <h3>Logs</h3>
                    </NavText>
                </NavItem>
                <NavItem eventKey="gcall">
                    <NavIcon>
                        <i className="fa-solid fa-phone-volume"></i>
                    </NavIcon>
                    <NavText>
                        <h3>Generate Call</h3>
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
