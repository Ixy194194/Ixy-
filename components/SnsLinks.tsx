import { FC } from 'react';
import SnsLink from './SnsLink';
import ContactButton from './ContactButton';

interface SnsLinksProps {
	setmodalstate: (attr: boolean) => void
}
const SnsLinks: FC<SnsLinksProps> = ({setmodalstate}) => {
	return (
		<div className="absolute bottom-0 left-0 w-full h-20 bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-slate-400/30 z-30">
			<div className="flex flex-wrap justify-center items-center h-full space-x-4">
				<SnsLink href="https://twitter.com/Ixy">Twitter</SnsLink>
				<SnsLink href="https://www.instagram.com/ixy__194/?hl=ja">Instagram</SnsLink>
				<SnsLink href="https://www.youtube.com/@ixy">YouTube</SnsLink>
				<SnsLink href="https://ixy.fanbox.cc/">fanbox</SnsLink>
				<SnsLink href="https://ci-en.dlsite.com/creator/5868">Ci-en</SnsLink>
				<ContactButton setmodalstate={setmodalstate}/>
			</div>
		</div>
	);
};

export default SnsLinks;
