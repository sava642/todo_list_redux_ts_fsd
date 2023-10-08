import cls from './UserAgentInfo.module.scss';

function UserAgentInfo() {
	const userAgent = window.navigator.userAgent;

	return (
		<div className={cls.user_agent}>
			<h3>User Agent:</h3>
			<p>{userAgent}</p>
		</div>
	);
}

export default UserAgentInfo;
