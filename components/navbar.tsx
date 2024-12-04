const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  //   useEffect(() => {
  //     if (currentScrollY === 0) {
  //       setIsNavVisible(true);
  //       navContainerRef.current.classList.remove("floating-nav");
  //     } else if (currentScrollY > lastScrollY) {
  //       setIsNavVisible(false);
  //       navContainerRef.current.classList.add("floating-nav");
  //     } else if (currentScrollY < lastScrollY) {
  //       setIsNavVisible(true);
  //       navContainerRef.current.classList.add("floating-nav");
  //     }
  //     setLastScrollY(currentScrollY);
  //   }, [currentScrollY, lastScrollY]);

  //   useEffect(() => {
  //     gsap.to(navContainerRef.current, {
  //       y: isNavVisible ? 0 : -100,
  //       opacity: isNavVisible ? 1 : 0,
  //       duration: 0.2,
  //     });
  //   }, [isNavVisible]);

  //   const toggleAudioIndicator = () => {
  //     setIsAudioPlaying((prev) => !prev);

  //     setIsIndicatorActive((prev) => !prev);
  //   };

  //   useEffect(() => {
  //     if (isAudioPlaying) {
  //       audioElementRef.current.play();
  //     } else {
  //       audioElementRef.current.pause();
  //     }
  //   }, [isAudioPlaying]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 bg-secondary border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            {/* <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            /> */}
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  className="nav-hover-btn"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
