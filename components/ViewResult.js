import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import {useListPeople} from '../context/ListPeople';
import { useEffect } from 'react';
import {H2} from '../styles/ViewResult'


function ViewResult() {

  const {listWinners} = useListPeople();

  useEffect(()=>{
    console.log('listWinners: ', listWinners)
  },[]);

  return (
    <>

      <Card style={{ width: '50%', height: '100px', backgroundColor: '#C0C0C0', marginBottom: '2%', marginTop: '5%', alignItems: 'center' }}>
        <Card.Title style={{ marginTop: '2%', fontSize: 18 }}>Sorteio de Habitação</Card.Title>
        <Card.Body style={{ marginTop: '0%', padding: 0, fontSize: 28 }}>Ganhadores do sorteio</Card.Body>
      </Card>

      <H2>Parabéns aos ganhadores</H2>

      <Card style={{ width: '50%', backgroundColor: '#C0C0C0', marginBottom: '1%', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Title style={{ marginTop: '2%', fontSize: 18 }}>GANHADOR LISTA IDOSO</Card.Title>
        <H2 >{listWinners.idososGanhador.cpf } - {listWinners.idososGanhador.nome } </H2>

      </Card>

      <Card style={{ width: '50%', backgroundColor: '#C0C0C0', marginBottom: '1%', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Title style={{ marginTop: '2%', fontSize: 18 }}>GANHADOR LISTA DEFICIENTE FÍSICO</Card.Title>
        <H2>{listWinners.deficienteFisicoGanhador.cpf } - {listWinners.deficienteFisicoGanhador.nome }</H2>
      </Card>

      <Card style={{ width: '50%', backgroundColor: '#C0C0C0', marginBottom: '1%', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Title style={{ marginTop: '2%', fontSize: 18 }}>GANHADOR LISTA GERAL</Card.Title>
        {
          listWinners.geralGanhador.map(item=>{
            return     <H2>{item.cpf } - {item.nome } </H2>

          })
        }
      </Card>

      <Button href="\" variant="primary">Voltar</Button>{' '}

    </>
  );
}

export default ViewResult;