import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
	<ReactLoading type={type} color={color} height={'3%'} width={'3%'} />
);

export default Loading;