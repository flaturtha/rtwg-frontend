import { Header } from 'tailwind-react-ui'
import { NavBrand } from 'tailwind-react-ui'
import { Box } from 'tailwind-react-ui'
import { NavToggle } from 'tailwind-react-ui'
import { NavMenu } from 'tailwind-react-ui'
import { NavItem } from 'tailwind-react-ui'
import { OutlineButton } from 'tailwind-react-ui'

export default function Navbar() {
  return (
    <Header className="bg-indigo-800">
      <NavBrand is="a" href="#header" font="semibold" text={['black', 'xl']}>
        <Box
          is="svg"
          fill="current"
          h={16}
          w={16}
          m={{ r: 2 }}
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />

        </Box>
        <Box inlineBlock>R&middot;T&middot;W&middot;G</Box>
      </NavBrand>
      <NavToggle />
      <NavMenu>
        <NavItem is="a" href="#header" active className="text-black">
          Docs
        </NavItem>
        <NavItem is="a" href="#header" active className="text-black">
          Examples
        </NavItem>
        <NavItem is="a" href="#header" active className="text-black">
          Blog
        </NavItem>
        <OutlineButton border="white" active text="black" text-hocus="blue">
          Download
        </OutlineButton>
      </NavMenu>
    </Header>
  )
}