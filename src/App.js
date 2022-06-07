import React from 'react';
import { Box, Grid, Container, Typography, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import DayRangeRadioGroup from './components/DayRangeRadioGroup';
import LocationInputField from './components/LocationInputField';
import FlightInfoGrid from './components/FlightInfoGrid';
import * as ConstantClass from './utils/Constants';
import './App.css';

class App extends React.Component {

render() { 

    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box bgcolor="info.main" color="info.contrastText" p={1}>
              <Typography variant="h4" component="h1">
                EZ Cheap Flights Seeker
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} xs={12}>
             <LocationInputField onClickLocation={this.handleLocationFrom} url={this.state.url} type={ConstantClass.CONSTANT_LOCATION_FROM} disable_flag={this.state.disable_flag} />
          </Grid> 
          <Grid item lg={6} xs={12}>
             <LocationInputField onClickLocation={this.handleLocationTo} url={this.state.url} type={ConstantClass.CONSTANT_LOCATION_TO} disable_flag={this.state.disable_flag} />
          </Grid>
          {/* <Grid item lg={6} xs={12}>
             <DateInputField onClickDate={this.handleDeparting} type={ConstantClass.CONSTANT_DEPARTING} startDate={this.state.selected_departing} fromDate={Moment().format("YYYY-MM-DD")} disable_flag={this.state.disable_flag} />
          </Grid> 
          <Grid item lg={6} xs={12}>
             <DateInputField onClickDate={this.handleReturning} type={ConstantClass.CONSTANT_RETURNING} startDate={this.state.selected_returning} fromDate={this.state.selected_departing} disable_flag={this.state.disable_flag} />
          </Grid>      */}
          <Grid item lg={6}>
            <FormControlLabel
             control={
             <Checkbox checked={this.state.direct_flight_flag} onChange={this.handleDirectFlight} name="checkedB" color="primary"  /> 
               }
               label="Direct flight only" disabled={this.state.disable_flag}
             />          
          </Grid> 
          <Grid item lg={6}>
             <DayRangeRadioGroup onChangeDay={this.handleDayRange}/>
          </Grid>    
          {/* <Grid item xs={12}>
             <Button variant="contained" startIcon={<FlightTakeoffIcon />} fullWidth={true} color="primary" onClick={this.handleClick} disabled={this.isFindNotReady()}>Find Flights!</Button>
          </Grid>    */}
          <Grid item xs={12}>
          { this.state.flight_info !== null &&
            <FlightInfoGrid info={this.state.flight_info} depart={this.state.selected_departing} return={this.state.selected_returning}/>
          }  
            <Box>         
                 {this.state.find_status}       
            </Box>
          </Grid>                        
        </Grid>               

        {/* <Backdrop open={this.state.backdrop_flag} className="backdrop">
           <CircularProgress color="primary" />
        </Backdrop> */}
  
      </Container>
    );
  }

}




export default App;