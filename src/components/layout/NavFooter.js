import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


class NavFooter extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };



    render() {
        return (
            <div style={{bottom: "0"}}>
                <Typography variant="h6" align="center" gutterBottom>
                    Tak to je futer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    No pozdrówki elo beac
                </Typography>
            </div>
        );
    }
}

NavFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (NavFooter);