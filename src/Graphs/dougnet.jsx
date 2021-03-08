import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
	barGrpah: {
		margin: theme.spacing(2),

	},
}))


export default function DougnetBar() {
	const classes = useStyles()
	const grpahList = useSelector((state) => state.dashboard);
	const data = {
		labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
		datasets: [{
			data: [grpahList.card1, grpahList.card2, grpahList.card3, grpahList.card4],
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			]
		}]
	};
	return (
		<div className={classes.barGrpah}>
			<Doughnut data={data}
				width={60}
				height={50}
				options={{
					maintainAspectRatio: true
				}} />
		</div>
	);
}