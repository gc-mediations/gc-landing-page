export const Timeline = () => {
	return (
		<div className="w-full max-w-3xl mx-auto py-12 md:py-16">
			<div className="space-y-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
						Our Journey
					</h2>
					<p className="mt-2 text-muted-foreground md:text-xl">
						A timeline of our company's key milestones.
					</p>
				</div>
				<div className="space-y-8">
					<div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12">
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">
								September 2022
							</div>
							<h3 className="text-xl font-bold">Launched our first product</h3>
							<p className="text-muted-foreground">
								After months of hard work, we're excited to release our flagship
								product to the world.
							</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">
								December 2022
							</div>
							<h3 className="text-xl font-bold">Reached 1,000 customers</h3>
							<p className="text-muted-foreground">
								We're thrilled to have reached this important milestone in such
								a short time.
							</p>
						</div>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12">
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">March 2023</div>
							<h3 className="text-xl font-bold">Opened our first office</h3>
							<p className="text-muted-foreground">
								We've outgrown our home offices and are excited to move into our
								new space.
							</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">June 2023</div>
							<h3 className="text-xl font-bold">Launched our mobile app</h3>
							<p className="text-muted-foreground">
								Our customers have been asking for a mobile experience, and
								we're thrilled to deliver.
							</p>
						</div>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12">
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">
								September 2023
							</div>
							<h3 className="text-xl font-bold">Raised Series A funding</h3>
							<p className="text-muted-foreground">
								With the support of our investors, we're poised for continued
								growth and innovation.
							</p>
						</div>
						<div className="flex flex-col items-start gap-2">
							<div className="text-sm font-medium text-primary">
								December 2023
							</div>
							<h3 className="text-xl font-bold">Reached 10,000 customers</h3>
							<p className="text-muted-foreground">
								We're humbled by the trust our customers have placed in us, and
								we're committed to continuing to deliver exceptional value.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
