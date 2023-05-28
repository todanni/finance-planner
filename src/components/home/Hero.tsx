import { Title, Button, Heading, Card, ContainedIcon } from '@todanni/ui';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Hero = () => {
	const router = useRouter();

	const features = [
		{
			title: 'Create a budget',
			subTitle: 'to control your spending',
			icon: 'calculator',
		},
		{
			title: 'Build a plan',
			subTitle: 'for a better future',
			icon: 'calendar',
		},
		{
			title: 'Track your progress',
			subTitle: 'and make adjustments',
			icon: 'presentChart',
		},
	] as const;

	const { data: sessionData } = useSession();

	return (
		<Card className='mt-8 flex flex-col items-center gap-8 px-4 py-4 sm:px-0'>
			<div className='w-full text-center'>
				<Title size='xlarge' intent='gradient'>
					Finance
				</Title>
				<Title size='xlarge' intent='primary'>
					Planner
				</Title>
			</div>
			<Heading size='lg' className='text-center text-lg font-semibold'>
				A completely <span className='text-green-400'>FREE</span> tool for
				managing your personal finances
			</Heading>
			<div className='grid gap-4 sm:grid-cols-3'>
				{features.map((feature, index) => (
					<div key={`feature-${index}`} className='flex gap-3'>
						<ContainedIcon object={feature.icon} colour='green' />
						<div>
							<Heading size='md' className='text-lg font-bold'>
								{feature.title}
							</Heading>
							<Heading size='sm' className='text-md'>
								{feature.subTitle}
							</Heading>
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-4 p-4'>
				<Button
					size='medium'
					colour='green'
					onClick={
						sessionData ? () => void router.push('/plan') : () => void signIn()
					}
					text={sessionData ? 'View my plan' : 'Sign in'}
				/>
				<Button
					size='medium'
					text='View demo'
					colour='default'
					onClick={() => void router.push('/demo')}></Button>
			</div>
		</Card>
	);
};

export default Hero;
