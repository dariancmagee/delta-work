import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import * as ConstantClass from '../utils/Constants';

const locationFrom = ConstantClass.CONSTANT_LOCATION_FROM;
const locationTo = ConstantClass.CONSTANT_LOCATION_TO;
var place_list=[];

class LocationInputField extends React.Component {
      state = {
        places: [],
        error_status: false,
        selected_place: null,       
        form_text: '',
        form_id:'',   
      }

      render() {
        return (
           <Box>
            <Autocomplete
              id={this.state.form_id}
              options={this.state.places}
              getOptionLabel={option => option.PlaceName+", "+option.CountryName + " ("+option.Iata+")"}
              value={this.state.selected_place}
              onChange={this.handleChange}
              disabled={this.props.disable_flag}
              renderInput={params => (
                <TextField {...params} label={this.state.form_text} variant="outlined" fullWidth />
              )}
            />
            <Snackbar open={this.state.error_status} autoHideDuration={6000} anchorOrigin={{vertical:'top', horizontal:'right'}}>
              <Alert severity="error" onClose={() => {this.setState({ error_status: false,  })}}>Network error found on Location API</Alert>
            </Snackbar>
           </Box> 
           );
    }//render
}//class

export default LocationInputField;

