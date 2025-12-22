import DeviceToggle from "@react/ui/DeviceToggle";
import { memo, useState } from "react";
import type { ScreenshotsProps } from "@/types/app";
import { areImagesEqual } from "@/types/app";

const screenshotAltTags = [
	"Habitability app intro screen",
	"Habitability app main habit tracking grid",
	"Habitability app habit detail view",
	"Habitability app friend feed",
	"Habitability app friend detail view",
	"Habitability app profile screen",
];

const Screenshots = ({ images }: ScreenshotsProps) => {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];
	const isIphone = activeDevice === "iphone";

	const getAltText = (index: number) => {
		const baseAlt = screenshotAltTags[index] || `Habitability app screenshot ${index + 1}`;
		return `${baseAlt} on ${isIphone ? "iPhone" : "iPad"}`;
	};

	return (
		<div className="mb-12">
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
					Screenshots
				</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div
				className={`relative overflow-hidden min-h-[${isIphone ? "400px" : "300px"}]`}
			>
				<div className="screenshots-container overflow-x-auto scrollbar-thin scrollbar-track-gray-200 dark:scrollbar-track-white/5 scrollbar-thumb-gray-400 dark:scrollbar-thumb-white/10 hover:scrollbar-thumb-gray-500 dark:hover:scrollbar-thumb-white/20">
					<div className="flex gap-6 pb-4">
						{currentImages.map((image, index) => (
							<button
								key={image}
								type="button"
								onClick={() => window.openLightbox?.(index, activeDevice)}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none group"
							>
								<img
									src={image}
									alt={getAltText(index)}
									className={`rounded-xl border border-gray-300 dark:border-white/10 object-contain shadow-lg transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:border-gray-400 dark:group-hover:border-white/20 ${isIphone
											? "aspect-[1242/2688] w-[260px]"
											: "aspect-[2048/2732] w-[360px]"
										}`}
									loading="lazy"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
