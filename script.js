const AllDetails = document.querySelectorAll('details');

AllDetails.forEach(deet=>{
  deet.addEventListener('toggle', toggleOpenOneOnly)
})

function toggleOpenOneOnly(e) {
  if (this.open) {
    AllDetails.forEach(deet=>{
      if (deet!=this && deet.open) deet.open = false
    });
  }
}