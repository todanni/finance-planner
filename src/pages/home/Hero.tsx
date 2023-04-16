import { Title, Icon, Button } from '@todanni/ui';

const Hero = () => {
	return (
		<div className='flex flex-col items-center gap-8'>
			<div className=''>
				<Title size='xlarge' intent='gradient'>
					Finance
				</Title>
				<Title size='xlarge' intent='primary'>
					Planner
				</Title>
			</div>
			<h2 className='text-lg text-white/70'>
				A completely FREE tool for managing your personal finances
			</h2>
			<div className='grid grid-cols-3 gap-4'>
				<div className='flex gap-3'>
					<div className='h-fit w-fit rounded-2xl bg-[#2B8F5A] p-1'>
						<Icon object='calculator' size='medium' colour='primary' />
					</div>
					<div>
						<Title size='medium' intent='primary'>
							Create a budget
						</Title>
						<p className='text-white/80'>to control your spending</p>
					</div>
				</div>
				<div className='flex gap-3'>
					<div className='h-fit w-fit rounded-2xl bg-[#2B8F5A] p-1'>
						<Icon object='calendar' size='medium' colour='primary' />
					</div>
					<div>
						<Title size='medium' intent='primary'>
							Build a plan
						</Title>
						<p className='text-white/80'>for a better future</p>
					</div>
				</div>
				<div className='flex gap-3'>
					<div className='h-fit w-fit rounded-2xl bg-[#2B8F5A] p-1'>
						<Icon object='presentChart' size='medium' colour='primary' />
					</div>
					<div>
						<Title size='medium' intent='primary'>
							Watch your money grow
						</Title>
						<p className='text-white/80'>and make the most of it</p>
					</div>
				</div>
			</div>
			<div className='flex gap-4'>
				<Button size='medium'> Get started </Button>
				<Button size='medium' intent='secondary'>
					View demo
				</Button>
			</div>
		</div>
	);
};

export default Hero;
