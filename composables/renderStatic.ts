export const useRenderStatic = () => {

  const renderStatic = (filepath: string) => {
    return filepath.replace('~', '_nuxt')
  }

  return {
    renderStatic
  }
}
