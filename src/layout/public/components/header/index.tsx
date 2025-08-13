import { IconCurrencyDollar } from "@tabler/icons-react";

import { HeaderContainer, HeaderInner, Brand, LogoIcon } from "./styles";

export function Header() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   console.log("Theme toggled:", isDarkMode ? "light" : "dark");
  // };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Brand>
          <LogoIcon>
            <IconCurrencyDollar size={20} />
          </LogoIcon>
          <span>Currency Converter</span>
        </Brand>

        {/* <ThemeToggle onClick={toggleTheme} title="Alternar tema">
          {isDarkMode ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ThemeToggle> */}
      </HeaderInner>
    </HeaderContainer>
  );
}
