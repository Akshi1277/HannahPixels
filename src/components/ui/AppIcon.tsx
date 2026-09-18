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
  ShieldCheck
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

interface AppIconProps {
  name: IconName
  size?: number
  className?: string
  variant?: 'solid' | 'outline'
}

export default function AppIcon({ name, size = 16, className = '' }: AppIconProps) {
  switch (name) {
    case 'ChevronDownIcon':
      return <ChevronDown size={size} className={className} />
    case 'ArrowRightIcon':
      return <ArrowRight size={size} className={className} />
    case 'Bars3Icon':
      return <Menu size={size} className={className} />
    case 'XMarkIcon':
      return <X size={size} className={className} />
    case 'StarIcon':
      return <Star size={size} className={className} />
    case 'ArrowDownIcon':
      return <ArrowDown size={size} className={className} />
    case 'ClockIcon':
      return <Clock size={size} className={className} />
    case 'CurrencyRupeeIcon':
      return <IndianRupee size={size} className={className} />
    case 'UserGroupIcon':
      return <Users size={size} className={className} />
    case 'SparklesIcon':
      return <Sparkles size={size} className={className} />
    case 'CubeIcon':
      return <Box size={size} className={className} />
    case 'WrenchScrewdriverIcon':
      return <Wrench size={size} className={className} />
    case 'CheckBadgeIcon':
      return <BadgeCheck size={size} className={className} />
    case 'TrophyIcon':
      return <Trophy size={size} className={className} />
    case 'ChatBubbleLeftRightIcon':
      return <MessageSquare size={size} className={className} />
    case 'GlobeAltIcon':
      return <Globe size={size} className={className} />
    case 'CameraIcon':
      return <Camera size={size} className={className} />
    case 'BriefcaseIcon':
      return <Briefcase size={size} className={className} />
    case 'BookOpenIcon':
      return <BookOpen size={size} className={className} />
    case 'HeartIcon':
      return <Heart size={size} className={className} />
    case 'ShoppingBagIcon':
      return <ShoppingBag size={size} className={className} />
    case 'CakeIcon':
      return <Cake size={size} className={className} />
    case 'BeakerIcon':
      return <FlaskConical size={size} className={className} />
    case 'PhoneIcon':
      return <Phone size={size} className={className} />
    case 'EnvelopeIcon':
      return <Mail size={size} className={className} />
    case 'MapPinIcon':
      return <MapPin size={size} className={className} />
    case 'CheckIcon':
      return <Check size={size} className={className} />
    case 'ArrowLeftIcon':
      return <ArrowLeft size={size} className={className} />
    case 'MessageCircleIcon':
      return <MessageCircle size={size} className={className} />
    case 'LeafIcon':
      return <Leaf size={size} className={className} />
    case 'ShieldCheckIcon':
      return <ShieldCheck size={size} className={className} />
    default:
      return <Sparkles size={size} className={className} />
  }
}
