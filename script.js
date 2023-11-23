document.addEventListener('DOMContentLoaded', function() {
  // Get the active tab from the URL query parameters
  var urlParams = new URLSearchParams(window.location.search);
  var activeTab = urlParams.get('tab');
  if (activeTab) {
    changeTab(activeTab);
  }
});

function changeTab(tabId) {
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  var clickedTab = document.getElementById(tabId);
  clickedTab.classList.add('active');

  // Update the URL with the active tab
  history.replaceState({}, '', window.location.pathname + '?tab=' + tabId);
}