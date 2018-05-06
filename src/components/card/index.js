import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

export default class CardsPage extends Component {
  render(props){
    return (
      <div>
       <Card>
          <div>
            <h2 class=" mdc-typography--title">{props.title}</h2>
            <div class=" mdc-typography--caption">{props.subtitle}</div>
          </div>
          <Card.Media className="card-media">
          <img src={props.img} style='width:100%'/>
          </Card.Media>
          <Card.Actions>
            <Card.ActionButton>leia mais...</Card.ActionButton>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}