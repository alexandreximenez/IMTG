import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

export function NavbarMobile() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    {/* <Link color="foreground" href="#">
          
          </Link> */}
                    Features
                </NavbarItem>

                <NavbarItem isActive>
                    {/* <Link href="#" aria-current="page">
                        
                    </Link> */}
                    Customers
                </NavbarItem>
                <NavbarItem>
                    {/* <Link color="foreground" href="#">
                       
                    </Link> */}
                    Integrations
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    {/* <Link href="#"></Link> */}
                    Login
                </NavbarItem>
                <NavbarItem>
                    {/* <Button as={Link} color="primary" href="#" variant="flat">
                        
                    </Button> */}
                    Sign Up
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        {/* <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                           
                        </Link> */}
                         {item}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}