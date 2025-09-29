export const useTheme = () => {
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set(_isDark) {
      colorMode.preference = _isDark ? 'dark' : 'light'
    }
  })

  return {
    isDark,
  };
};