const screens = {
  extraSmallest: '375px',
  extraSmall: '460px',
  small: '576px',
  medium: '801px',
  mediumPlus: '940px',
  large: '992px',
  extraLarge: '1200px',
  extraLarger: '1440px',
  extraLargest: '1920px',
  megaLarge: '2000px',
};

const media = (size: keyof typeof screens) => `@media screen and (max-width: ${screens[size]})`;

export default media;
