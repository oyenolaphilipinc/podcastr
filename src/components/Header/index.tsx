import styles from "./styles.module.scss";
import format from "date-fns/format";

export function Header() {
	const currentDate = format(new Date(), "EEEEEEE, d MMMM");

	return (
		<header className={styles.headerContainer}>
			<img src='./logo.svg' alt='Podcastr' />
			<p>The best for you to hear, always</p>
			<span>{currentDate}</span>
		</header>
	);
}
