class Utils {
  static isMobile() : boolean {
    const maxWidthMobile = 500;
    return window.screen.width <= maxWidthMobile;
  }
}

export default Utils;
