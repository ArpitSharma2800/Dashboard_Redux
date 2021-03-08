import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles'
import { menucard } from "../Redux/dashbard/dashbordAction";
const useStyles = makeStyles(theme => ({
  barGrpah: {
    margin: theme.spacing(2),
  },
}))
// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: '#b3e5fc',
//       borderColor: '#b3e5fc',
//       borderWidth: 1,
//       hoverBackgroundColor: '#b3e5fc',
//       hoverBorderColor: '#b3e5fc',
//       data: [65, 59, 80, 81, 56, 55, 40, 29]
//     }
//   ]
// };


export default function VerticalBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const grpahList = useSelector((state) => state.dashboard);
  // useEffect(() => {
  //   // getData();
  //   dispatch(menucard(1));
  // }, []);

  const data = {
    labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],

    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#b3e5fc',
        borderColor: '#b3e5fc',
        borderWidth: 1,
        hoverBackgroundColor: '#b3e5fc',
        hoverBorderColor: '#b3e5fc',
        data: [grpahList.card1, grpahList.card2, grpahList.card3, grpahList.card4]
      }
    ]
  }
  return (
    <div className={classes.barGrpah}>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                min: 20
              }
            }]
          }
        }}
      />
    </div>
  );
}