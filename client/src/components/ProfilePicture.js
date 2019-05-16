import React from 'react';

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`,
		}}
		alt="great event"
		src={imgSrc}
	/>
);

export default ProfilePicture;