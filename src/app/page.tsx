import MainHeading from "./components/MainHeading/MainHeading"

export default function Home() {
	return (
		<main className="MainContent" data-testid="main_content">
			<MainHeading>Home</MainHeading>
			<section className="PageContent scrollable">
				<h2>Welcome to the APP</h2>
			</section>
		</main>
	)
}
