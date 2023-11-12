export function setLinkValues(id, href, className) {
  const linkComponent = document.getElementById(id);
  linkComponent.class = className;
  linkComponent.href = href;
}

