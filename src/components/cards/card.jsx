import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    Button,
    ButtonGroup
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))


export default function AltCard() {
    const classes = useStyles()
    const grpahList = useSelector((state) => state.dashboard);
    const dispatch = useDispatch();
    const data = [
        { quarter: 1, earnings: grpahList.card1 },
        { quarter: 2, earnings: grpahList.card2 },
        { quarter: 3, earnings: grpahList.card3 },
        { quarter: 4, earnings: grpahList.card4 }
    ]

    async function increment(i){
        await dispatch()
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map((elem, i) => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <Card elevation={0} variant="outlined">
                            <CardHeader
                                title={`Quarter : ${elem.quarter}`}
                                subheader={`Earnings : ${elem.earnings}`}
                            />
                            <CardContent>
                                <ButtonGroup size="small" aria-label="small outlined button group">
                                    <Button >+</Button>
                                    {<Button disabled>{i == 0 ? grpahList.card1 : i == 1 ? grpahList.card2 : i == 2 ? grpahList.card3 : i == 3 ? grpahList.card4 : null}</Button>}
                                    {<Button >-</Button>}
                                </ButtonGroup>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}