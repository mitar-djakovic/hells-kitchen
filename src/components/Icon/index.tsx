import { IconStyled } from './Icon.styled';
import {
	Behance,
	Dribble,
	Facebook,
	Google,
	Instagram,
	Linkedin,
	Medium,
	Patreon,
	Pinterest,
	Reddit,
	RSS,
	Skype,
	Slack,
	Snapchat,
	Spotify,
	Telegram,
	Tiktok,
	Twitch,
	Youtube,
} from './icons';

type Name =
	| 'behance'
	| 'dribble'
	| 'facebook'
	| 'google'
	| 'instagram'
	| 'linkedin'
	| 'medium'
	| 'patreon'
	| 'pinterest'
	| 'reddit'
	| 'rss'
	| 'skype'
	| 'slack'
	| 'snapchat'
	| 'spotify'
	| 'telegram'
	| 'tiktok'
	| 'twitch'
	| 'youtube';

type Size = 'md' | 'lg';

const iconMap = {
	behance: <Behance />,
	dribble: <Dribble />,
	facebook: <Facebook />,
	google: <Google />,
	instagram: <Instagram />,
	linkedin: <Linkedin />,
	medium: <Medium />,
	patreon: <Patreon />,
	pinterest: <Pinterest />,
	reddit: <Reddit />,
	rss: <RSS />,
	skype: <Skype />,
	slack: <Slack />,
	snapchat: <Snapchat />,
	spotify: <Spotify />,
	telegram: <Telegram />,
	tiktok: <Tiktok />,
	twitch: <Twitch />,
	youtube: <Youtube />,
};

interface IconProps {
	name: Name;
	size?: Size;
	color?: string;
	className?: string;
}

const Icon = ({ name, size = 'md', color = '#000000', className }: IconProps) => (
	<IconStyled size={size} className={className} color={color}>
		{iconMap[name]}
	</IconStyled>
);

export type { Size };
export default Icon;
