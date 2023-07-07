import Image from 'next/image';
import MainHeading from '@/app/components/MainHeading/MainHeading'
import { FlexLayout, FlexColumn } from '@/app/components/LayoutUtils'
import styles from './page.module.css'

export default function Cards() {
	return (
		<main className="MainContent" data-testid="main_content">
			<MainHeading>Cards</MainHeading>
			<section className="PageContent">
				<FlexLayout justifyCenter fullHeight>
					<FlexLayout centerItems className={styles.container}>
						<FlexColumn shrink className={styles.details}>
							<h2 data-testid="cards_title">Order a card that fits your needs!</h2>
							<div data-testid="cards_text">
								Define limits and permissions for your card. It will follow you everywhere and pay for all your purchases. <br/>
								Order your first card now!
							</div>
						</FlexColumn>
						<FlexColumn className={styles.image}>
							<Image
								data-testid="cards_image"
								priority
								src="/images/cards.svg"
								alt="A card that fits your needs image"
								height={200}
								width={200}
							/>
						</FlexColumn>
					</FlexLayout>
				</FlexLayout>
			</section>
		</main>
	)
}
