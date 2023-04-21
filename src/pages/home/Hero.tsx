import { Title, Paragraph, Icon, Button, Heading } from '@todanni/ui';
import { signIn, signOut, useSession } from 'next-auth/react';

const Hero = () => {
	const features = [
		{
			title: 'Create a budget',
			subTitle: 'to control your spending',
			icon: <Icon object='calculator' size='medium' colour='savings' />,
		},
		{
			title: 'Build a plan',
			subTitle: 'for a better future',
			icon: <Icon object='calendar' size='medium' colour='savings' />,
		},
		{
			title: 'Watch your money grow',
			subTitle: 'and make the most of it',
			icon: <Icon object='presentChart' size='medium' colour='savings' />,
		},
	];

	const { data: sessionData } = useSession();

	return (
		<div className='mt-8 flex flex-col items-center gap-8 rounded-3xl bg-white/5 p-8 shadow-2xl'>
			<div className='w-full  text-center'>
				<Title size='xlarge' intent='gradient'>
					Finance
				</Title>
				<Title size='xlarge' intent='primary'>
					Planner
				</Title>
			</div>
			<Heading size='medium'>
				A completely FREE tool for managing your personal finances
			</Heading>
			<div className='grid grid-cols-3 gap-4'>
				{features.map((feature, index) => (
					<div key={`feature-${index}`} className='flex gap-3'>
						<div className='h-fit w-fit rounded-2xl bg-[#2B8F5A] p-1'>
							{feature.icon}
						</div>
						<div>
							<Title size='small' intent='primary'>
								{feature.title}
							</Title>
							<Paragraph>{feature.subTitle}</Paragraph>
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-4'>
				<Button
					size='medium'
					onClick={sessionData ? () => void signOut() : () => void signIn()}>
					{sessionData ? 'View my plan' : 'Create account'}
				</Button>
				<Button size='medium' intent='secondary'>
					Preview demo
				</Button>
			</div>
		</div>
	);
};

export default Hero;
