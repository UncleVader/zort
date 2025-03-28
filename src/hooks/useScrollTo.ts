function useScrollToTop() {

  const goToAnchor: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.target as HTMLAnchorElement
    if (el.tagName==="A") {
      e.preventDefault()
      const hash = el.getAttribute('href')?.replace(/\//g,'')
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  return { goToAnchor };
}

export default useScrollToTop;
