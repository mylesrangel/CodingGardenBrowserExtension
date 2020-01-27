
console.log("in options.js")
function save_options() {

    //Get the value user wants to check if cjislive
    let interval = document.getElementById('timeIntervals').value;
    let status = document.getElementById('status');

    chrome.storage.sync.set({
      interval: interval,
    },() => {

        // Update status to let user know options were saved.
        status.textContent = 'Options saved!';
        setTimeout(function() {
        status.textContent = '';
        }, 1500);
        //reset background.js page
        chrome.runtime.reload();
    });
}

function load_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      interval: '10'
    }, function(items) {
      document.getElementById('timeIntervals').value = items.interval;
    });
  }


document.addEventListener('DOMContentLoaded', load_options);

document.getElementById('save').addEventListener('click', save_options);