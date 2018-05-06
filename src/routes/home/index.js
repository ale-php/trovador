import { h, Component } from 'preact';
import style from './style';
import banner from '../../assets/banner.png';
import CardPage from '../../components/card';
import { LayoutGrid } from 'preact-material-components';

export default class Home extends Component {
	render() {
		return (
    <LayoutGrid>
          <LayoutGrid.Inner>
			
            <LayoutGrid.Cell cols="4">
			<CardPage title='Home' subtitle='Welcome to home route' img={banner} />
			</LayoutGrid.Cell>

          </LayoutGrid.Inner>
        </LayoutGrid>

		);
	}
}
