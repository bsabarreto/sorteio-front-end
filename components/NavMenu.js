import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import PeopleOld from './PeopleOld';
import PeopleGeral from './PeopleGeral';
import PeopleHandicapped from './PeopleHandicapped';
import {useListPeople} from '../context/ListPeople';
import { useEffect } from 'react';
import Link from 'next/link';
import {DivButton, LabelNumberPeople} from '../styles/NavMenu'

function NavMenu() {

  const {listPeople, raffleHousing} = useListPeople();

  useEffect(()=>{
    console.log('num: ', listPeople)
  }, []);


  return (
    <>

      <Card style={{ width: '50%', backgroundColor: '#C0C0C0', marginBottom: '2%', marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Title style={{ marginTop: '2%', fontSize: 18 }}>Sorteio de Habitação</Card.Title>
        <Card.Body style={{ fontSize: 28 }}>Listas dos Participantes do Sorteio</Card.Body>
      </Card>
      <DivButton>
        <LabelNumberPeople >Total de participantes: {listPeople !== null && listPeople.numeroDeParticipantes !== null && listPeople.numeroDeParticipantes}</LabelNumberPeople>
        <Button style={{ width: '30%' }}  variant="primary" onClick={raffleHousing}><Link href="/result"><a style={{color:"#fff"}}>Realizar Sorteio</a></Link></Button>
      </DivButton>


      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
        style={{ width: '50%', backgroundColor: '#DCDCDC', }}
      >

        <Tab eventKey="home" title="Idosos" style={{ width: "100%" }}>
          <PeopleOld></PeopleOld>
        </Tab>

        <Tab eventKey="profile" title="Deficiente Físico" style={{ width: "100%" }}>
          <PeopleHandicapped></PeopleHandicapped>
        </Tab>
        <Tab eventKey="longer-tab" title="Geral" style={{ width: "100%" }}>
          <PeopleGeral></PeopleGeral>
        </Tab>
      </Tabs>

    </>
  );
}

export default NavMenu;