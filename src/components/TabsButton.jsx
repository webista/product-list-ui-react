function TabsButton({ isActive, onClick, children }) {
  return (
    <button type="button" className={isActive ? "Tabs-button is-active" : "Tabs-button"} role="tab" aria-selected={isActive} onClick={onClick}>
      {children}
    </button>
  );
}

export default TabsButton;
