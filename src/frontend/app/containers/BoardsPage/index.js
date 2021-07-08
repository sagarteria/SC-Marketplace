/**
 *
 * BoardsPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBoardsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: 'black',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export function BoardsPage() {
  useInjectReducer({ key: 'boardsPage', reducer });
  useInjectSaga({ key: 'boardsPage', saga });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => { 
    // fetch("https://sca-dev-metabase.azurewebsites.net/api/session", 
    // {
    //   mode: 'cors', 
    //   method: 'POST',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Credentials': true,
    //     'Access-Control-Allow-Origin':'*' 
    //   },
    //   body: JSON.stringify({ username: 'admin@xyz.com', password: 'mars@123' })})
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log('data', result)
    //     }
    //   )
    //   .catch((err) => {
    //     console.log('The error occurred while get Metabase JSON response : ', err);
    //     })

        var config = {
          'Content-Type': 'application/json',
          'X-Metabase-Session': '6c146e56-58d9-4eec-9f5e-0d78d9ab6028',     
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin':'*' 
      };
      var axiosOptions = {
          method: 'POST',
          url: 'https://sca-dev-metabase.azurewebsites.net/api/getdatabase',
          headers: config
      };
      axios(axiosOptions).then(response => {
          console.log(response.data);
      }).catch(err => {
          console.log(err);
      });
      },
    );

  const embedToken =
    'H4sIAAAAAAAEAB2WxQ70WA6F3-XfZqQwjdSLMDNnlwpWmKk17z7Vvbeur48_-_jvP3b29FNW_PnvH-QFkK-9hMqJwbD7DkVO81iCkhUjbOPuqQp4B43zEEBRL4vbX9BHv23xZUULm3kmWS8ukvgcftSOd_R-jSwQvVCuXUD1WN3eD3sYV7pk1Z5oVMFYmIDClO8WbgF1YcLXtnZxnjg5CvJmQehXOfd6u0uehQqTiJhw4F4HUhoB1Ahl3pGdaMg-pPbXLgjqbvnO3-ZjUFe3khZvQfyz5xaGViztZRH38MhnwwPW9PQMKsm5ZDO_TreA-gjIrLe44pTrqTRtTuf7gijWsK6LqJrpGSsScDwQz84gf2JhluFJtw_aVPBJTOs7Wry0WUfgFsuLOcGgPZNogNOZZmBKKg9JFRNfc6eaTwTGelc_gqmuC2PeieFjHzSKdu60zSjj70WhH1BH3nvI6RR64A5zHpGAiJZkG4YP_eEtHU80v88JxCsiMDX7E5UOv50topGFm5BXNk6cLlM-1v101PSeG1guNxavV2YAKpeZHJued2rU7RSxAl_dLR0RPCep853Y8FgT5enuc2XSGjaRsVH4bUr4qRrExa1ooXJ5uVLadauypLzwmy3iKgq0Kc57dIkiO-eSKFuQaakARGbX4HpSNA8rDBaM7rGAQjFQ7LY1hlATM9-dAjbEoXMiKCt6r8LbDQRCXO4ixT-Plqmi1zHwx2OQ8T5JJCY4RJbgCH9N-33JUW3kWWDdvtTzNMLItVr2WMvtT9fMzwnPbWC-RMpLuYu-Y-Nj9NpXxJUIDKszWd_neNlSxKJhPV96mr3dVRtnemvHnzSI5Dlq85m8JTEWPbi4ulC9zbxEnp4jwRbN4fVuCiaD0WTKSzwQpvFbznEdvsnrvLHNJZE-CG9TKg6p-qpQCdvnSAY5hGVaP3gEJho-6e0diMgOP5S9MJeCMc39ES_ynXLZavSN6yWKy28RPrf3bqNt4OkK-5jZg-xz3J75PaUY0tc2GPS2NJ0o2mgBYdJPqBcPCZ41uqaDcT9AXYAR4GLWF-E4nIufNOISHHFJsSLLiG1wbtKWXFw2hNgi2H6TbstkZ54FzPS6jl7d7HkRmy6EUtxP1wHty84k3EAbgVBcpjfiS4pkj-Jnaruwk3nqs36C_kqXhfQQASHimqvmz3LUTqUm2YPjuxK5ElCCAME31XzuK8gVetIKtsBtrxNpctDY0p5n5kdEdRA0o4WrCiyW9WQvmPlJcmTs0beZE1ZyLB2WVJgt93oN7yJlHhBfvwVGCYWhBtdOuD2vpKZhAgrN-DGgYRVJA2L3OMcZURq5qchZ8dmvaYTqZEYB5eTl6o_9MZav0xR02shlLBqjvlsxnErUTAYKmDAdMUgh0V1ce2bWOHvypwg5hYzBHdh6kJhgfbJhDe-P5_v-Vp9nSmjLfN_i0MlyHhko3Ag1Y943JONmgxpHDp1Wb3Sx0vkfMgAwNisaB85n_w0xt7pUkaMf0M6RqvZcJntz0ubXN-mfeB--c3ErlLxD3mljaJVpS6ZsCq_2G0yQWhybmx0HT-j47zer2q_M928sAuFzxwE7IIwYUlWJf1djU3BJpXtzyCl51Vt08H6PT_WGxhM_72gnB4BOCIdYunxYPIh-PqfGChim18Jn0ETLl7dy682pmKXHxzHGHCe2c1pAp8flMYz8bUQJnJ_mMuBi9l0FQqV1CkGhAcdX4C1Bcf3eizHDFCcmps5JpFdV2WgSJTsUh_Jo5GCOefVWhaiZQYqDLtwvhYP1lhVmWBqmS1ajA4XKF0kZYByIT4Wkvop_w9g3WAcfIxZKlqmuD-_3Lx_VlUFqitV1OO9l-aGNcnH9jpg_slZQWvjnHT7NmS6NeCwhP_q_RC8AbJvJivPdXIu1yolOhxK1hch2ZpfUn0wvrjmRnSK-7XcjEaK6lzVCTlHClg8Hz2TbkuKVda374x5fGC4UjsL6ikyllZvZkuTeviev5iAvRA6vBwbcu2AXxMDqo11JeN-T8jWb2dsVWOv7KOkHqma2wPuNGkshTzfxCG2v0bx8ap29g_fA7y5Hz3ULavHtHNQ7i1ZKOPdAOlIVT8bLpFvTLz3jGBSvcvfPDoxMkGAJLfjF5Gs0w8AVOraIq7gfx_gQrKe38Ti0XeAxY6gUZsXQyGPd0OMb7x2dt8vcRASa-w1AlkEk2pCu9j2XYnUefM3BzluKtVd6OJvJ9slH0jHLEar0uWSD7iKQ4aokUFJhx1RFQIF8vsQsX_oHscQTAwjQ_a5xxOddZNV3XMGKcLCqpR_ZyLFb1PPhz9hvq2XKXNSKKNLuF3Uz7lO7Qj0poi8NKazRzqUh3Nfzf0iyHAQ5LPkFvrkcBP2Xad29FV5S4xucqKuG1FBG2gOaK6A1VSKrERCnr9QDjOwj1Bab4x6rKXZm8DDUFHJLf5ChGuPGjWXubmp_Gqz3dFE5j5WHBd1k1_QO9V2GtB8al9lkJ_pR5K2ukyJR4YKEw6Q4s5AECK5NM_785w-3PvM-aeXzO8e0uSLHCB_2Rph8AlIFmNyEnw5N2oV4qaJD9Nph5L7AZ_f445nuJiRimPeXFARDpbHIlXkGHif904zVZITpUjMclpHJZzaOUdH9Az4Xlfy28tmgV3powZK-TBmrl0BGMsO5TXCuvgEJgdGdO0mJz5gF2kSxb91uTM-_v-EiRsJEsfpz7NNIfZplXpnbRvMseLHoPq6tvb0wgCsTeBrMt23qAwUAspbXfku6cQ1xWsMOIHn1Yxk0OJ1YpIpJfUqMSziVVUTM4fLFDAOCrJI6a50UAGqoIBAj1g_irpIdq7Y1dYtGKD4Yhl2uoDRd3f-gq4RSxeymUFCRGikF28Pd4d1fbX_99Y_Mz9yUqxL-VI5j1TJhZGdaARpbcB9deriYf6O8bz1m-7GWv7AEFezpCul9k1IQe5cnY035ZXE_A96aoEWD56sy3Jl6eze5OHVDQBFbvfQfiAgmNIAwS3FnpGPfHY1F66CFUIbfyt_m4ecxiFhG5K6MVODc8XcZ4_yN8Jp0Inq3Li9C79GaX5aLOWiI5-UPn_5Wb_awFara3xzh4oqqOG1owhhkNMIkM4d4NAX4-aAp9xvyrED4SebUlyDZTezaW1ngKfX4OBvskDNkGgyYMBCo7qqonzs55baHzXH7DgK6Agi5u-zQ-1SXYbtb2Q4tsPhJ9TvMBAbJn21mCfFzXfCsK2PrXWCK5yb-7Ab00E7OqNJJ1WkxhAQkVMDzs1kW-5WEChxAls5P5v_9H-_AOIWCDAAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19';
  const embedUrlPowerBI =
    'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZX19';
  const embedId = 'f6bfd646-b718-44dc-a378-b73e6b528204';

  return (
    <Grid container spacing={1} style={{ backgroundColor: 'white' }}>
      <Grid container item xs={12} spacing={1} style={{ minHeight: 150 }}>
        <Grid item xs={4}>
          <div />
        </Grid>
        <Grid item xs={5}>
          <div />
        </Grid>
        <Grid item xs={3}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="My Feed" />
            <StyledTab label="Boards" />
          </StyledTabs>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={1}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.textFields} />
        </Grid>
        {/* Power BI report integrated */}
        {/* <Grid item xs={12}>
          <iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=c008608d-ac4c-43aa-88b1-b5d565388ce2&autoAuth=true&ctid=2fc13e34-f03f-498b-982a-7cb446e25bc6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9" frameborder="0" allowFullScreen="true"></iframe>
        </Grid> */}
        <Grid item xs={12}>
          {/* <PowerBIEmbed
            embedConfig={{
              type: 'report', // Supported types: report, dashboard, tile, visual and qna
              id: embedId,
              embedUrl: embedUrlPowerBI,
              accessToken: embedToken, // Keep as empty string, null or undefined
              tokenType: models.TokenType.Embed,
            }}
          /> */}
          <h3>Dashboard integrated from Metabase</h3>
          <iframe src='https://sca-dev-metabase.azurewebsites.net/public/dashboard/2a36101c-d6ad-4839-9937-e1316f82c02c' frameborder='0' width='1000' height='800' allowtransparency></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}

BoardsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  boardsPage: makeSelectBoardsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BoardsPage);
