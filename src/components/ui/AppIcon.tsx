import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Star,
  ArrowDown,
  Clock,
  IndianRupee,
  Users,
  Sparkles,
  Box,
  Wrench,
  BadgeCheck,
  Trophy,
  MessageSquare,
  Globe,
  Camera,
  Briefcase,
  BookOpen,
  Heart,
  ShoppingBag,
  Cake,
  FlaskConical,
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowLeft,
  MessageCircle,
  Leaf,
  ShieldCheck,
  Clipboard
} from 'lucide-react'

export type IconName =
  | 'ChevronDownIcon'
  | 'ArrowRightIcon'
  | 'Bars3Icon'
  | 'XMarkIcon'
  | 'StarIcon'
  | 'ArrowDownIcon'
  | 'ClockIcon'
  | 'CurrencyRupeeIcon'
  | 'UserGroupIcon'
  | 'SparklesIcon'
  | 'CubeIcon'
  | 'WrenchScrewdriverIcon'
  | 'CheckBadgeIcon'
  | 'TrophyIcon'
  | 'ChatBubbleLeftRightIcon'
  | 'GlobeAltIcon'
  | 'CameraIcon'
  | 'BriefcaseIcon'
  | 'BookOpenIcon'
  | 'HeartIcon'
  | 'ShoppingBagIcon'
  | 'CakeIcon'
  | 'BeakerIcon'
  | 'PhoneIcon'
  | 'EnvelopeIcon'
  | 'MapPinIcon'
  | 'CheckIcon'
  | 'ArrowLeftIcon'
  | 'MessageCircleIcon'
  | 'LeafIcon'
  | 'ShieldCheckIcon'
  | 'ClipboardIcon'

interface AppIconProps {
  name: IconName
  size?: number
  className?: string
  variant?: 'solid' | 'outline'
}

export default function AppIcon({ name, size = 16, className = '' }: AppIconProps) {
  const iconProps = { size, className, 'aria-hidden': true }

  switch (name) {
    case 'ChevronDownIcon':
      return <ChevronDown {...iconProps} />
    case 'ArrowRightIcon':
      return <ArrowRight {...iconProps} />
    case 'Bars3Icon':
      return <Menu {...iconProps} />
    case 'XMarkIcon':
      return <X {...iconProps} />
    case 'StarIcon':
      return <Star {...iconProps} />
    case 'ArrowDownIcon':
      return <ArrowDown {...iconProps} />
    case 'ClockIcon':
      return <Clock {...iconProps} />
    case 'CurrencyRupeeIcon':
      return <IndianRupee {...iconProps} />
    case 'UserGroupIcon':
      return <Users {...iconProps} />
    case 'SparklesIcon':
      return <Sparkles {...iconProps} />
    case 'CubeIcon':
      return <Box {...iconProps} />
    case 'WrenchScrewdriverIcon':
      return <Wrench {...iconProps} />
    case 'CheckBadgeIcon':
      return <BadgeCheck {...iconProps} />
    case 'TrophyIcon':
      return <Trophy {...iconProps} />
    case 'ChatBubbleLeftRightIcon':
      return <MessageSquare {...iconProps} />
    case 'GlobeAltIcon':
      return <Globe {...iconProps} />
    case 'CameraIcon':
      return <Camera {...iconProps} />
    case 'BriefcaseIcon':
      return <Briefcase {...iconProps} />
    case 'BookOpenIcon':
      return <BookOpen {...iconProps} />
    case 'HeartIcon':
      return <Heart {...iconProps} />
    case 'ShoppingBagIcon':
      return <ShoppingBag {...iconProps} />
    case 'CakeIcon':
      return <Cake {...iconProps} />
    case 'BeakerIcon':
      return <FlaskConical {...iconProps} />
    case 'PhoneIcon':
      return <Phone {...iconProps} />
    case 'EnvelopeIcon':
      return <Mail {...iconProps} />
    case 'MapPinIcon':
      return <MapPin {...iconProps} />
    case 'CheckIcon':
      return <Check {...iconProps} />
    case 'ArrowLeftIcon':
      return <ArrowLeft {...iconProps} />
    case 'MessageCircleIcon':
      return <MessageCircle {...iconProps} />
    case 'LeafIcon':
      return <Leaf {...iconProps} />
    case 'ShieldCheckIcon':
      return <ShieldCheck {...iconProps} />
    case 'ClipboardIcon':
      return <Clipboard {...iconProps} />
    default:
      return <Sparkles {...iconProps} />
  }
}
