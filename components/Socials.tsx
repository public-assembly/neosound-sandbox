import { Box, Text, BoxProps } from 'degen'
import { socials } from '../utils/constants'

interface SocialsProps extends BoxProps {}

export function Socials({...props}: SocialsProps) {
  return (
    <Box display="flex" gap="4" {...props}>
      {socials.map((social) => 
        <Box as="a" href={social.url} target="_blank" rel="noreferrer">
          <Text>{social.platform}</Text>
        </Box>
      )}
    </Box>
  )
}