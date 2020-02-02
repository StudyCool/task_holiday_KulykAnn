import { appendById, loadJSON } from '../../utils';
import createSlider             from '../Slider';

loadJSON( '/assets/images/comments.json' )
  .then( (comments) => {
    appendById( 'sliderContainer', createSlider( comments ) );
  } );