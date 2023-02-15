import { RandomUUIDOptions } from 'crypto'

export interface IIconOrientationProps {
  orientation?: 'left' | 'right' | 'down' | 'up'
}

export interface IIconProps {
  strokeColor?: string
  backgroundFillColor?: string
  fillColor?: string
  width?: number
  height?: number
  className?: string
}

export interface ISideBarItem {
  text: string
  subtext?: string
  link?: string
  onClick?: () => void
  isVisible: boolean
}

export interface IImageProps {
  name: string
  type: string
}
export interface IFormProps {
  title: string
  description: string
  price: number | null
  size: number | null
  owner: string
  image: {
    name: string
    type: string
  }
}

export interface IOfferModel {
  id: string
  offerName: string
  offerDescription: string
  offerOwner: string
  price: number
  size: number
  image: string
  userId: string
  createdAt: Date
  url: string
}
