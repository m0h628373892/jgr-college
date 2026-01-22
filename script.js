let navOpen = false;

function toggleNav() {
  const nav = document.getElementById("sideNav");
  nav.style.left = navOpen ? "-250px" : "0";
  navOpen = !navOpen;
}
