export const openSidebar = (): void => {
  const SIDEBAR: HTMLElement | null = document.getElementById("sidebar");
  const SIDEBAR_OVERLAY: HTMLElement | null = document.getElementById(
    "sidebar-overlay"
  );
  const SIDEBAR_BTN: HTMLElement | null = document.getElementById(
    "sidebar-btn"
  );
  if (SIDEBAR && SIDEBAR_OVERLAY && SIDEBAR_BTN) {
    SIDEBAR.classList.replace("sidebar-none", "sidebar-block");
    SIDEBAR_OVERLAY.classList.replace("sidebar-none", "sidebar-block");
    SIDEBAR_BTN.removeEventListener("click", openSidebar);
    SIDEBAR_BTN.addEventListener("click", closeSidebar);
  }
};

export const closeSidebar = (): void => {
  const SIDEBAR: HTMLElement | null = document.getElementById("sidebar");
  const SIDEBAR_OVERLAY: HTMLElement | null = document.getElementById(
    "sidebar-overlay"
  );
  const SIDEBAR_BTN: HTMLElement | null = document.getElementById(
    "sidebar-btn"
  );
  if (SIDEBAR && SIDEBAR_OVERLAY && SIDEBAR_BTN) {
    SIDEBAR.classList.replace("sidebar-block", "sidebar-none");
    SIDEBAR_OVERLAY.classList.replace("sidebar-block", "sidebar-none");
    SIDEBAR_BTN.removeEventListener("click", closeSidebar);
    SIDEBAR_BTN.addEventListener("click", openSidebar);
  }
};
