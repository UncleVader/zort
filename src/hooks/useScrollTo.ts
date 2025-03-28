function useScrollToTop() {

  const goToAnchor: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = e.target as HTMLAnchorElement
    const anchorEl = el.tagName==="A" ? el : el.closest('a')
    if (anchorEl) {
      e.preventDefault()
      const hash = anchorEl.getAttribute('href')?.replace(/\//g,'')
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
