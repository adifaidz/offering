import React from 'react';
import { Column, Columns, Hero, HeroBody, Container, Button, Icon, Image, Title } from 'bloomer';
import logo from '../../images/logo.svg';
import 'bulma-tooltip/dist/css/bulma-tooltip.min.css';

function Menu(props) {
    return (
        <Hero isFullHeight isFullWidth>
            <HeroBody>
                <Container hasTextAlign='centered'>
                    <Columns>
                        <Column isSize="1/3" isOffset="1/3">
                            <Image isRatio="square" src={logo} style={{padding: "100px"}}/>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column isSize="1/3" isOffset="1/3">
                            <Title isSize={1} style={{color: "white"}}><i>Offering</i></Title>
                        </Column>
                    </Columns>
                    <Columns>
                        <Column isSize="1/3" isOffset="1/3" style={{ display: "flex", justifyContent: "space-around"}}>
                            <Button onClick={() => props.history.push('/dashboard')} className="tooltip" data-tooltip="Dashboard">
                                {/* <span>Dashboard</span> */}
                                <Icon isSize='large' className="fas fa-chart-line" />  
                            </Button>
                            {/* <Button>
                                <Icon isSize='large' className="fas fa-chart-line" />
                            </Button> */}
                            <Button onClick={() => props.history.push('/search')} className="tooltip" data-tooltip="Search">
                                {/* <span>Search</span> */}
                                <Icon isSize='large' className="fas fa-search" />
                            </Button>
                        </Column>
                    </Columns>
                </Container>
            </HeroBody>
        </Hero>
    );
}

export default Menu;