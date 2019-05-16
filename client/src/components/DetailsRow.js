import React from 'react';
const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};
const DetailsRow = ({ icon, title, name, notes }) => {
	const renderNotes = () => {
		if (notes)
			return (<p style={{ fontWeight: 300, lineHeight: 1.45 }}>{notes}</p>);
		return null
	};
	return (
		<div style={styles.detailsRow.row}>
			<span
			className={`icon ${icon}`}
			style={{ ...styles.detailsRow.icon,alignSelf: 'flex-start' }}
			/>
			<div style={{ width: '80%' }}>
				<h2 style={styles.detailsRow.title}>
					{name}: {title}
				</h2>
				{renderNotes()}
			</div>
		</div>
	);
};

export default DetailsRow;