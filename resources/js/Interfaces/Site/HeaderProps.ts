import MenuLink from "@/models/Link/MenuLink";
import Language from "@/models/language/Language";

interface HeaderProps {
    mainLinks: MenuLink[],
    footerLinks?: MenuLink[],
    socialLinks: MenuLink[],
    contactLinks: MenuLink[],
    logo: {logo: string},
    languages: Language[],
    handleTheme?: () => void,
}

export default HeaderProps;
