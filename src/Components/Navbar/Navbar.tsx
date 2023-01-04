import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { isLoggedIn, isQuestionaireCompleted } from "../../Fetch";
import { SearchBar } from "../SearchBar";
import { ProfileButton } from "./ProfileButton";
import { SignIn } from "../SignIn";

interface NavbarInt {
  dark?: boolean;
}

export default function Navbar({ dark }: NavbarInt) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={dark ? "#2E2E2E" : "transparent"}
        borderBottom={"1px solid rgba(255, 255, 255, 0.04)"}
        color={"#ffffff"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        position={"absolute"}
        w={"100%"}
        zIndex={2}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            background="transparent"
            _active={{
              background: "transparent",
            }}
            _hover={{
              background: "transparent",
            }}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justifyContent={"start"}>
          <Link href={"#"}>
            <Flex justifyContent={"start"} fontFamily="Bakbak One">
              Collegy
            </Flex>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav dark={dark} />
          </Flex>
        </Flex>

        <Flex justify={"flex-end"} direction={"row"}>
          <Flex display={{ base: "none", md: "flex" }} mr={"3"}>
            <SearchBar dark={dark} />
          </Flex>
          {isLoggedIn() ? <ProfileButton dark={dark} /> : <SignIn />}
        </Flex>
      </Flex>

      <Box zIndex={2}>
        <Collapse in={isOpen}>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

interface DesktopNavInt {
  dark?: boolean;
}

const DesktopNav = ({ dark }: DesktopNavInt) => {
  const linkColor = "#ffffff";
  const linkHoverColor = "#cccccc";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const hasCollegeData = isQuestionaireCompleted();

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: hasCollegeData ? "College List" : "Mega Search",
      href: hasCollegeData ? "#college-list" : "#form",
    },
    {
      label: "Explore College",
      href: "#explore-college",
    },
    {
      label: "About Us",
      href: "#about-us",
    },
  ];

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.children ? undefined : navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  /*
    TODO: add to local storage a variable for if they have college data so
          we don't have to call api just to check
  */
  const hasCollegeData = isQuestionaireCompleted();

  const NAV_ITEMS: Array<NavItem> = [
    {
      label: hasCollegeData ? "College List" : "Mega Search",
      href: hasCollegeData ? "#college-list" : "#form",
    },
    {
      label: "Explore College",
      href: "#explore-college",
    },
    {
      label: "About Us",
      href: "#about-us",
    },
  ];

  return (
    <Box>
      <Stack bgColor={"#2E2E2E"} p={4} display={{ md: "none" }} pt={"20"}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"#ffffff"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
