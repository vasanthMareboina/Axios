import React from 'react'
import './blinkistHeader.css'
import blinkistHeaderIcon from './blinkist_logo.png'
import { BsSearch } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'

import { Grid } from '@material-ui/core'
import Button1 from '../../Atoms/Button1'



function BlinkistHeader() {
    return (

        <Grid container direction="row" spacing={5} justifyContent="grid-around">
            <Grid item>

                <Button1 className="bHeader">
                    <img src={blinkistHeaderIcon} alt="Blinkist" />
                    <span className="bigFontForHeader">Blinkist</span></Button1>

            </Grid>
            <Grid item>
                <Button1 style={{ padding: "20px" }}><BsSearch></BsSearch></Button1>
            </Grid>
            <Grid item>
                <Button1>Explore<MdExpandMore /></Button1>
            </Grid>
            <Grid item>
                <Button1>MyLibrary</Button1>
            </Grid>
            <Grid item>
                <Button1>Highlights</Button1>
            </Grid>
            <Grid item spacing={50}>
                <div className="push"><Button1 style={{ float: 'right' }}> Account<MdExpandMore /></Button1></div>
            </Grid>






        </Grid>
    )

}


export default BlinkistHeader;